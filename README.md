# _The New Yorker_ Technical Test

Simple web application for news browsing built on [Express.js](https://expressjs.com/) + [React](https://reactjs.org/) + [Elastic UI](https://elastic.github.io/eui/#/)
## Setup
```sh
npm install
```
Create **.env** file from **.env.example** and fill in valid values including **NEWSAPI_KEY**. You can create a free account in NewsAPI (https://newsapi.org/) and make use of the api key generated.
## Build
```sh
npm run build
```
## Run
* ### For **development** mode
  ```sh
  npm run dev
  ```
  Or you can run server and client separately.
  ```sh
  npm run dev:server
  ```
  ```sh
  npm run dev:client
  ```
* ### For **production** mode
  ```sh
  npm start
  ```
## Test
```sh
npm run test
```
