import { pollNetatmo } from "./netatmo";

export default async job => {
  switch (job.name) {
    case "netatmo":
      await pollNetatmo(job.id, job.data.credentials);
      break;
    default:
      console.error("⚠️VENDOR NOT FOUND!");
  }
};