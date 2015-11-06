import server from './server';
import logger from './logger';

const port = process.env.PORT || 3000;
server.create(port).run(() => {
  logger.info('Running on port %s', port);
});
