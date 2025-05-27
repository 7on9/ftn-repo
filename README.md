## Project setup

```bash
# install required dependencies
$ yarn install


# You also need docker and docker-compose installed to run the project
# If you don't have docker installed, you can follow the instructions here: https://docs.docker.com/get-docker/

# start the docker containers
# Start kafka brokers and ui using docker compose
$ docker compose -f docker-compose.kafka.yml up -d

# create a .env file from the template
# Make sure to fill in the required environment variables in the .env file
$ cp .env-template .env

# Start mysql database and redis using docker compose (exposed on port 3306 and 6379 respectively)
# Skip this step if you are using an external database or redis instance
$ docker compose up -d db redis
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev <app_name>

# examples:
$ yarn run start:dev ftn
$ yarn run start:dev ftn-worker

# Start worker with specific topics. Otherwise, the worker will listen to all topics
$ yarn run start:dev ftn-worker --topics <topics>

# Examples:
$ yarn run start:dev ftn-worker --topics generate-report,notification

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

