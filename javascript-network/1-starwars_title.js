const request = require('request');
const movieId = process.argv[2];

if (!movieId){
    console.error('Please enter a valid movie Id');
    process.exit(1);
}
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
request.get(apiUrl,(error,response,body) => {
    if(error){
        console.error('Error:',error.message);

    }else{
        try{
            const movieData=JSON.parse(body);
            console.log(movieData.title);
        
        } catch(parseError){
            console.error('Error parsing JSON:',parseError.message);
        } 
    }
});