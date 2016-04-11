
// What are all the args, including the context args?
console.log(process.argv);

// What are the user args?
var userArgs = process.argv.slice(2);

var debugParam = userArgs && userArgs.length && userArgs[1];

const debugParameters = ['-d', '-D', '--debug'];
var debugging = debugParameters.includes(debugParam);

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

const createPlainHttpServer = () => {
  const app = express();

  // Server the /dist directory
  app.use(express.static('dist'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.static(path.join(__dirname, 'public')));

  return http.createServer(app);
}

import hotHttpServer from './servers/server';

const server = debugging ? hotHttpServer : createPlainHttpServer();


if(debugging){ // Start the config server and the http server separately
  ioserver.start(); // Start the io server
  server.start(); // Start the server according to the default configuration
}else{ // Fold the http server into the IO server
  ioserver.start(server); // Create the IO server with the content server
  server.listen(port); // Start the combined server
}
