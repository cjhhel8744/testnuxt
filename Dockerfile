FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# expose 5000 on container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "start" ]

# docker stop nuxtapp
# docker rm nuxtapp
# docker rmi nuxt_app:latest .
# docker build -t nuxt_app:latest .
# docker run --name nuxtapp -d -p 5000:5000 nuxt_app:latest



# # create destination directory
# RUN mkdir -p /usr/src/nuxt-app
# WORKDIR /usr/src/nuxt-app

# # update and install dependency
# RUN apk update && apk upgrade
# RUN apk add git

# # copy the app, note .dockerignore
# COPY . /usr/src/nuxt-app/
# RUN npm install

# # build necessary, even if no static files are needed,
# # since it builds the server as well
# RUN npm run build

# # expose 5000 on container
# EXPOSE 3000

# # set app serving to permissive / assigned
# ENV NUXT_HOST=0.0.0.0
# # set app port
# ENV NUXT_PORT=3000

# # start the app
# CMD [ "npm", "start" ]

# # docker build -t nuxt_app:0.0.1 .
# # docker run --name nuxtapp -it -p 5000:5000 nuxt_app:0.0.1