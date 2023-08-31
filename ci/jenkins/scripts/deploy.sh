#!/bin/bash
set -euo pipefail

REGION=us-east-1
ENV=$1
APP_TYPE=$2
CLUSTER=${ENV}-ecs
SERVICE_NAME=${ENV}-${APP_TYPE}
REGISTER_TASK_ONLY=${REGISTER_TASK_ONLY:="FALSE"}

#Register the task definition in the repository
# This task Definition file is getting created by ansible playbook before running deploy script
REGISTER_TASK_DEF=$(aws ecs register-task-definition --family ${SERVICE_NAME} --cli-input-json file:///tmp/${APP_TYPE}-task-definition.json --region ${REGION})
if [ ${REGISTER_TASK_ONLY} != "TRUE" ]; then
  SERVICES=$(aws ecs describe-services --services ${SERVICE_NAME} --cluster ${CLUSTER} --region ${REGION} | jq .failures[])
  #Get latest revision
  REVISION=$(aws ecs describe-task-definition --task-definition ${SERVICE_NAME} --region ${REGION} | jq .taskDefinition.revision)
  #Create or update service
  if [ "$SERVICES" == "" ]; then
    echo "entered existing service"
    DESIRED_COUNT=$(aws ecs describe-services --services ${SERVICE_NAME} --cluster ${CLUSTER} --region ${REGION} | jq .services[].desiredCount)
    if [ ${DESIRED_COUNT} = "0" ]; then
      DESIRED_COUNT="1"
    fi
    aws ecs update-service --cluster ${CLUSTER} --region ${REGION} --service ${SERVICE_NAME} --task-definition ${SERVICE_NAME}:${REVISION} --desired-count ${DESIRED_COUNT}
  else
    echo "entered new service"
    aws ecs create-service --service-name ${SERVICE_NAME} --desired-count 1 --task-definition ${SERVICE_NAME} --cluster ${CLUSTER} --region ${REGION}
  fi
fi