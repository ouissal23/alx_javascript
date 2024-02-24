const request = require('request');
const url = process.argv[2];

request.get(url,(error,response,body) => {
  if (error){
    console.error(`An error occurred:${error}`);
    process.exit(1);
  }
  console.log(`code:${response.statusCode}`);
});
