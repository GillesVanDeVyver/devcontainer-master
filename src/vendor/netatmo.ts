import got from "got"

// TODO: implement expected function behavior
export async function pollNetatmo(jobId, cred) {
  try {
    const response = await got('https://google.com');
    console.log(response.body);
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
}