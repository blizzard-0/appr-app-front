@Library('shared-library') _

def branch = env.BRANCH_NAME
def docker_tag = "${branch}".replaceAll('origin/', '')
docker_tag = "${docker_tag}".replaceAll('/', '-')
image_latest_tag = "${branch}" == 'main' ? 'latest' : "${docker_tag}"
def common = null

def buildFrontend(env_config, image_tag) {
  def build_arg = "--build-arg SENTRY_AUTH_TOKEN=${SENTRY_AUTH_TOKEN} "
  def frontend_config = ''

  frontend_config = env_config['common_env_frontend'] + env_config['env_frontend']
  for ( e in frontend_config ) {
    temp = "--build-arg ${e.key}=${e.value} "
    build_arg = build_arg.concat(temp)
  }

  frontend_image = docker.build("nextjs-app-frontend:${image_tag}", "${build_arg} --target build .")
  return frontend_image
}

pipeline {
    environment {
        COMMIT_ID = sh(script: "printf \$(git rev-parse HEAD | cut -c 1-7)", returnStdout: true)
        IMAGE_TAG = "${docker_tag}_${COMMIT_ID}_${BUILD_NUMBER}"
        RC_IMAGE_TAG = "rc_${COMMIT_ID}_${BUILD_NUMBER}"

        registry = '736898943770.dkr.ecr.us-east-1.amazonaws.com'
        registryCredential = 'jenkins-iam-role'
        app_frontend_image = ''
        storybook_image = ''
        prod_env_config = ''
        stag_env_conig = ''
        thunderdome_env_config = ''

        rc_app_frontend_image = ''
    }
    agent any
    options {
        timeout(time: 1, unit: 'HOURS')
        disableConcurrentBuilds()
    }

    stages {
        stage('Get Frontend Env Config')
        {
          parallel {
            stage('Get Staging and Prod Config') {
              when {
                anyOf {
                  expression { branch == 'develop' }
                }
              }
              steps {
                script {
                  stag_env_conig = loadEnvConfig('stag')
                  prod_env_config = loadEnvConfig('prod')
                }
              }
            }
            stage('Get Thunderdome Config') {
              when {
                anyOf {
                  expression { branch != 'develop' }
                }
              }
              steps {
                script {
                  thunderdome_env_config = loadEnvConfig('thunderdome')
                }
              }
            }
          }
        }

        stage('init subrepo') {
      steps {
        sh '''
                    git submodule init && git submodule update
                '''
      }
        }

        stage('Build Images')
        {
          parallel {
        stage('Build frontend Images')
              {
          stages {
            stage('Build Stag frontend Image')
                  {
              when {
                anyOf {
                  expression { branch == 'develop' }
                }
              }
              steps
                    {
                script {
                  SendSlackNotification('Build', 'STARTED')
                  app_frontend_image = buildFrontend(stag_env_conig, IMAGE_TAG)
                }
                    }
                  }

            stage('Build Prod frontend Image')
                  {
              when {
                anyOf {
                  expression { branch == 'develop' }
                }
              }
              steps
                    {
                script {
                  sleep(5)
                  rc_app_frontend_image = buildFrontend(prod_env_config, RC_IMAGE_TAG)
                }
                    }
                  }

            // This one is for all development like env build(feature branch and PR)
            stage('Build Dev frontend Image')
                  {
              when {
                anyOf {
                  expression { branch != 'develop' }
                }
              }
              steps
                    {
                script {
                  SendSlackNotification('Build', 'STARTED')
                  app_frontend_image = buildFrontend(thunderdome_env_config, IMAGE_TAG)
                }
                    }
                  }
          }
              }

        stage('Build storybook Image')
              {
          steps
                {
            script {
              storybook_image = docker.build("storybook:${IMAGE_TAG}", ' --target storybook .')
            }
                }
              }
          }
        }
        stage('Validating Images') {
          parallel {
            stage('Frontend Linting')
            {
          steps
                {
            script {
              app_frontend_image.inside('-u root')
                    {
                sh '''
                            cd /appreciate-app-front/
                            npm ci
                            npm run lint
                        '''
                    }
            }
                }
            }
            stage('Frontend Tests')
            {
          steps
                {
            script {
              app_frontend_image.inside('-u root')
                    {
                sh '''
                            cd /appreciate-app-front/
                            npm ci
                            npm run test
                        '''
                    }
            }
                }
            }
          }
        }

      stage('Push built Images')
      {
          steps {
            parallel(
              a: {
                script {
                  docker.withRegistry('https://' + registry, 'ecr:us-east-1:' + registryCredential)
                  {
                    app_frontend_image.push()
                  }
                }
              },
              b: {
                script {
                  docker.withRegistry('https://' + registry, 'ecr:us-east-1:' + registryCredential)
                  {
                    storybook_image.push()
                  }
                }
              },
            )
          }
      }

      stage('Deploy staging')
      {
        when {
          anyOf {
            expression { branch == 'develop' }
          }
        }
        steps
        {
          build job: 'Deploy_app_front',
            parameters: [
              string(name: 'APP_IMAGE_TAG', value: IMAGE_TAG),
              string(name: 'STORYBOOK_IMAGE_TAG', value: IMAGE_TAG),
              string(name: 'ENV', value: 'stag')
            ]
        }
      }

      //stage('Deploy thunderdome')
      //{
      //  when {
      //    anyOf {
      //      expression { branch == 'thunderdome' }
      //    }
      //  }
      //  steps
      //  {
      //    build job: 'Deploy_thunderdome',
      //      parameters: [
      //        string(name: 'APP_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'API_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'DB_MIG_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'DOCS_IMAGE_TAG', value: image_tag),
      //        string(name: 'STORYBOOK_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'SCRAPING_TASK_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'S3_PRODUCTS_UPLOADER_IMAGE_TAG', value: IMAGE_TAG),
      //        string(name: 'ENV', value: 'thunderdome')
      //      ]
      //  }
      //}

      stage('Push RC Images')
      {
          when {
            anyOf {
              expression { branch == 'develop' }
            }
          }
          steps {
            parallel(
              a: {
                script {
                  docker.withRegistry('https://' + registry, 'ecr:us-east-1:' + registryCredential)
                  {
                    rc_app_frontend_image.push()
                  }
                }
              },
              c: {
                script {
                  docker.withRegistry('https://' + registry, 'ecr:us-east-1:' + registryCredential)
                  {
                    storybook_image.push(RC_IMAGE_TAG)
                  }
                }
              },
            )
          }
      }
    }

    post {
        always {
      SendSlackNotification('Build', currentBuild.result)
        }
    }
}
