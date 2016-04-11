
// What are all the args, including the context args?
console.log('application arguments:')
console.log(process.argv);

// What are the user args?
var userArgs = process.argv.slice(2);
console.log('user arguments');
console.log(userArgs);

var debugParam = userArgs && userArgs.length && userArgs[0];

const debugParameters = ['-d', '-D', '--debug', 'webpack'];
var debugging = debugParameters.includes(debugParam);

console.log('is debugging? ' + !!debugging);

const path = require('path');
const express = require('express');
const http = require('http');
const logger = require('morgan');
import ioserver from './servers/ioserver';
import port, {defaultIOPort} from './src/app/port';
import fs from 'fs';
import bodyParser from 'body-parser';

const ioPort = port; // Only using one port for this application

const ioClientLocation = "http://localhost:" + defaultIOPort;

const configuration = {
  port: port,
  ioPort: ioPort,
}

if(debugging){ // If we're debugging, we're going to use a separate ports for webpack and socketio, so use that
  ioClientLocation: ioClientLocation
}


// If client files needed to information that we don't know at compile time,
// We could write it out to a config file and have the client file import it
fs.writeFile('./dist/config.js', 'portConfig = ' + JSON.stringify(configuration));

const launchCombinedHttpServer = () => {
  const app = express();

  // Server the /dist directory
  app.use(express.static('dist'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));

 const server = http.createServer(app);

 ioserver.start(server); // Create the IO server with the content server
 server.listen(port); // Start the combined server

}

import hotServer from './servers/server';

const launchHotHttpServer = () => {

  console.log('Launching HOT http server')

  // grab the webpack server which will run separately
  // const server = require('./servers/server');

  ioserver.start(); // Start the io server
  hotServer.start(); // Start the server according to the default configuration
}



if(debugging) {
  launchHotHttpServer();
} else {
  launchCombinedHttpServer();
}
