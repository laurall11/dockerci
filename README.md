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
