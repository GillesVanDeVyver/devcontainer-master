import got from "got"

(async (jobId, cred) => {
  try {
    const response = await got('https://google.com');
    console.log(response.body);
    //=> '<!doctype html> ...'
  } catch (error) {
    console.log(error.response.body);
    //=> 'Internal server error ...'
  }
})().catch(err => {
  console.error(err);
});