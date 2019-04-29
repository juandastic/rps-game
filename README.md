## RPS-GAME

This is a Clasic game Rock, Paper, Scissors built in Mongo, Express, React

Live Demo available on https://rps-game.juandastic.co/

### Runing the Project
There are two ways to run this project: using MongoDB and NodeJs on your environment or using the docker container.
however you have to run `npm install` for the two alternatives

#### Using your own machine
- You need MongoDb installed and running
- On the root folder run `npm run start:server`

This will run the SPA build and the server

*Note : by default the server will be running on port 3000*

#### Using a docker container
- You need Docker installed
- On the root folder run `npm run docker:dev`

This will create two containers one with MongoDb and the another container with the SPA and API server
*Note : by default the server will be running on port 3000*