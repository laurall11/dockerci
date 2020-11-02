This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started - Deploying with Docker 

1. Clone this repository with 

```bash
git clone https://github.com/laurall11/dockerci/
```
2. CD into local directory

3. In the command line, run:

```bash
npm run ci
```
This first runs Jest (our Unit Tests), lints and formats the whole documents. After everything went well, Nginx and Next get dockerized with Compose (docker-compose up).

3.1 If you ever need to force a re-build of the Docker containers, run

```bash
npm run ci-rebuild
```

4. In your browser, go to http://localhost

## Run individual components

To run through all the unit tests, run:
```bash
npm run test
```

To lint the Index-Page and write result to the Outputfile, run:
```bash
npm run lint
```

To format all files ending with the .js-extension, run:
```bash
npm run format
```

## Getting Started - Locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Setup - Jenkins in a docker Container

Create the following file locally:

```bash
USER root
RUN apt-get update -qq \
    && apt-get install -qqy apt-transport-https ca-certificates curl gnupg2 software-properties-common
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
RUN apt-get update  -qq \
    && apt-get install docker-ce=17.12.1~ce-0~debian -y
RUN usermod -aG docker jenkins
```

Next run the following to commands locally:

```bash
docker image build -t jenkins-docker
docker container run -p 8080:8080-v /var/run/docker.sock:/var/run/docker.sock Jenkins-docker
```

## Get Administrator Password for Jenkins

Run following command:

```bash
docker exec -it <Container Name>/bin/bash
cat/var/jenkins_home/secrets/initialAdminPassword
```

Next install Jenkins with suggested plugins.

## Needed Plugins for Jenkins

- CloudBees Docker Custom Build Environment Plugin
- CloudBees Docker Hub/Registy Notification
- Docker Plugin
- Gradle Plugin
- NodeJS Plugin
- Pipeline
- BlueOcean
