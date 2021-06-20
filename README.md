# ShoppingCard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Development server (localhost)

```shell
npm run start
```

```shell
yarn start
```

> URL: <http://localhost:4200>

## Development server (container)

```shell
docker build --build-arg configuration="" -t frontend/shopping-card-app-image:latest .
docker run -d --name shopping_card -p 8080:80 frontend/shopping-card-app-image:latest
```

> URL: <http://localhost:8080>

## Build (localhost)

### production

```shell
npm run build:prod
```

```shell
yarn build:prod
```

### staging

```shell
npm run build:staging
```

```shell
yarn build:staging
```

## Build (container)

### production

```shell
docker build --build-arg configuration=production -t frontend/shopping-card-app-image:latest .
docker run -d --name shopping_card -p 8080:80 frontend/shopping-card-app-image:latest
```

### staging

```shell
docker build --build-arg configuration=staging -t frontend/shopping-card-app-image:latest .
docker run -d --name shopping_card -p 8080:80 frontend/shopping-card-app-image:latest
```

> Possible docker container image size: ~140MB

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
