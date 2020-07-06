import { Worker } from 'bullmq';

new Worker('REST_VENDOR_TASKS', `${__dirname}/vendor/processor.js`, {
  concurrency: 10,
  connection: {
    host: process.env.REDIS_SERVICE_HOST,
    port: Number(process.env.REDIS_SERVICE_PORT)
  }
}
);