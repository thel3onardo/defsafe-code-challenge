# DefSafe Code Challenge

![Cover image](https://github.com/thel3onardo/defsafe-code-challenge/blob/main/public/readme-image.png?raw=true)

Front-end code challenge built with Nuxt3, TailwindCSS and Vitest.


## Goal
The project's goal is to build a simple application that displays cat facts. It was requested the use of the public <a href="">Cats API</a>, <a href="">Nuxt</a> as a meta framework and <a href="">TailwindCSS</a> as a styling engine.

For caching the API requests, I took advantage of the Nitro's built-in cache alongisde Nuxt server routes. For unit testing, I used the official nuxt-test-utils library alongside Vitest, as a test runner.

For images optimizations and caching, I used the module @nuxt/image, which helped me a lot.


## Running the project

In order to run the project in your machine, follow the steps bellow:

### Clone the repo
```bash
git clone https://github.com/thel3onardo/defsafe-code-challenge
```

Run the docker container either with docker compose:

### With docker compose
```bash
docker-compose up -d
```

After building the docker image, a project preview can be accessed in port :3000 of your localhost.

### Running test suite and commands
In order to run the test suite, you need to access the docker's container bash terminal and execute the commands. 

```bash
docker exec -it defsafe_nuxt bash
```

Once you are inside containers bash, you can execute pnpm commands, such as:

```bash
pnpm run test   // This will run the test suite.
```

```bash
pnpm run dev    // Runs a development server inside the container. Defaults to port 3001
```

## Feedbacks

Did you find any problem in the project? or something that did not run as expected? Feel free to send me an email at **leonardo.contato03@gmail.com** or open a pull request!
