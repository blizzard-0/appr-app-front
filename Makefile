build:
	docker build -t nextjs-app-frontend:dev --build-arg SENTRY_AUTH_TOKEN=d64fc78ceefa4f12b281947cd444175074ad3c5e13614a448e3f47479d726856 --build-arg NODE_ENV=production --build-arg NEXT_PUBLIC_CLOUDINARY_API_KEY=888314817349995 --build-arg NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=appreciate-stuff-inc --build-arg NEXT_PUBLIC_INSTAGRAM_APP_ID=957737058189787 --build-arg NEXT_PUBLIC_BLOG_BASE_URL=https://blog.appreciate.it --build-arg NEXT_PUBLIC_APP_BACKEND_BASE_URL=https://api.thunderdome.appreciate.it --build-arg NEXT_PUBLIC_APP_FRONTEND_BASE_URL=https://thunderdome.appreciate.it --build-arg NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://api.thunderdome.appreciate.it/graphql --build-arg NEXT_PUBLIC_CLOUDINARY_USER_PHOTO_UPLOAD_PRESET=thunderdome-user-uploads --build-arg NEXT_PUBLIC_MIXPANEL_TOKEN=28ad38c4299e17eb30305edc7be522a3 --build-arg NEXT_PUBLIC_MIXPANEL_DEBUG=true --build-arg NEXT_PUBLIC_SENTRY_DSN=https://24f19de7ac634f44857207600473582c@o1097258.ingest.sentry.io/6181791 --build-arg NEXT_PUBLIC_IS_GTM_ENABLED=false --build-arg NEXT_PUBLIC_IS_EXPLORE_ENABLED=true --target build .

run:
	docker run --rm\
		-v $(PWD):/appreciate-mobile-app \
		appreciate-mobile-app:dev 

shell:
	docker run --rm -it\
		-v $(PWD):/appreciate-mobile-app \
		appreciate-mobile-app:dev \
		/bin/bash

