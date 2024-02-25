const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please enter a valid Movie ID.');
  process.exit(1);
}
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const movieData = JSON.parse(body);
      movieData.characters.forEach((characterUrl) => {
        request.get(characterUrl, (characterError, characterResponse, characterBody) => {
          if (characterError) {
            console.error('Error:', characterError.message);
          } else {
            const characterData = JSON.parse(characterBody);
            console.log(characterData.name);
          }
        });
      });
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});