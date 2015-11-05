import winston from 'winston';

function info() {
  winston.log.apply('info', arguments);
}

function error() {
  winston.log.apply('error', arguments);
}

function debug() {
  winston.log.apply('debug', arguments);
}

export default {
  info,
  error,
  debug,
};
