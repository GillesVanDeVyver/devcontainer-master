import { Queue } from 'bullmq';

const queue = new Queue('REST_VENDOR_TASKS');

async function addJobs() {
  await queue.add('netatmo', {
    id: 'XXXXX',
    data: { credentials: {} }
  }, {
    repeat: {
      every: 5000
    }
  });
}

addJobs();