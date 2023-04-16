const express = require('express');
const path = require('path');
const https = require('http');
const debug = require('debug')('kanav:server');
const createError = require('http-errors');
// const getRouter = require('./backendsrc/routers/getter');
// const updateRouter = require('./backendsrc/routers/updater');
// const userRouter = require('./backendsrc/routers/user');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https')
      res.redirect(`https://${req.header('host')}${req.url}`);
    else next();
  })
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


/**
 * Event Listeners
 */

const errorEventListener = () => {
  if (error.syscall !== 'listen') throw error;

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

const listeningEventListener = () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}


/**
 * Step-3 Create https server
 */

const server = https.createServer(app);
server.listen(port);
server.on('error', errorEventListener);
server.on('listening', listeningEventListener);
console.log('Server Started @', port);