# Portfolio-project

This is a project to create an API-Rest with express and CRUD.

Steps to create this api setting:


### 1. Create a project and get into it
(_the first '$' character represents terminal: **you must not copy this**_)

```sh
#bash or linux terminal
$ mkdir miproyecto && cd $_
```
### 2. Initialize a node project
```sh
$ npm init -y
```

### 3. Initialize git
```sh
$ git init
```
### 4. Include `node_modules` in `.gitignore` file
```sh
$ echo 'node_modules' > .gitignore
```
### 5. Install dev-dependencies
```sh
$ npm i -D typescript tslint jest ts-jest ts-node-dev
```
### 6. Install types
```sh
$ npm i -D typescript @types/jest @types/node
```

### 7. Create and config `tsconfig.json` file
```sh
$ npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true
```
### 8. Create and configure `jest.config.ts`
```sh
$ npx ts-jest config:init
```

### 9. Configure `package.json` file
```json
...
"scripts": {
    ...
    "test": "jest"
  },


  The Api content is:

  - package.json
  - package-lock.json
  - tsconfig.json
  - jest.config.js
  - src:

        - model (TS model.ts, datos.json)
        - controller (TS controller.ts)
        - route (TS server.ts)

  - TS server.ts
  - request.rest
  - .gitignore      