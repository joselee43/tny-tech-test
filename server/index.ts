import * as dotenv from 'dotenv';
import * as http from 'http';

dotenv.config();

import Server from './server';
import config from './config/index';

const port = normalizePort(config.get('port'));


/**
 * Setup Express server
 */
const app = new Server().app;
app.set('port', port);


/**
 * Create http server
 */
const server = http.createServer(app);


/**
 * Update keepAliveTimeout and headersTimeout directive
 */
const keepAliveTimeout = Number(config.get('keepAliveTimeout'));
if (!isNaN(keepAliveTimeout) && keepAliveTimeout > 0) {
  server.keepAliveTimeout = keepAliveTimeout * 1000;
  server.headersTimeout = (keepAliveTimeout + 4) * 1000; // This should be bigger than `keepAliveTimeout + your server's expected response time`
}


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val: any): any {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false;
}


/**
 * Event listener for HTTP server "error" event.
 */
 function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)

    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)

    default:
      throw error
  }
}


/**
 * Event listener for HTTP server "listening" event.
 */
function onListening () {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.info('Listening on ' + bind)
}
