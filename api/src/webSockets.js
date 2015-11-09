import socketIO from 'socket.io';
import logger from 'winston';

export function init(server) {
  const io = socketIO.listen(server);

  io.on('connection', socket => {
    socket.on('disconnect', () => logger.info('client %s disconnected', socket.id));
    socket.on('greeting', (message) => {
      logger.info('client on %s says %s', socket.id, message);
      socket.emit('greeting', 'hi from server');
    });
  });

  return io;
}
