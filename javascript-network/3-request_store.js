const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];

if (!url || !filename) {
    console.error('Please enter a valid URL or filename');
    process.exit(1);
}

request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Failed to fetch content. Status code:', response.statusCode);
        process.exit(1);
    }

    fs.writeFile(filename, body, { encoding: 'utf-8' }, (writeError) => {
        if (writeError) {
            console.error('Error:', writeError.message);
            process.exit(1);
        }
    });
});