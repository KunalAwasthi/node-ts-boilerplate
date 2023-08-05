import app from './config/app';
import logger from './config/logger';
const port = 8080;

app.listen(port, () => {
  logger.info(`[Server]: running at https://localhost:${port}`);
});