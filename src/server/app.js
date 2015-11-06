import server from './server';

server.create(process.env.PORT || 3000).run(() => {
  logger.info('Running on port %s', port);
});
