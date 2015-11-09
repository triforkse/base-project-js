import https from 'https';
import fs from 'fs';
import logger from 'winston';

export default function(app, certRoot) {
  const keyFile = certRoot + '/key.pem';
  const certFile = certRoot + '/cert.pem';

  if (fs.existsSync(keyFile)) {
    const privateKey = fs.readFileSync(keyFile);
    const certificate = fs.readFileSync(certFile);

    logger.info('HTTPS Enabled.');

    return https.createServer({
      key: privateKey,
      cert: certificate,
    }, app);
  }

  logger.warn('HTTPS disabled! No Certificate or Private Key supplied.');
  return app;
}
