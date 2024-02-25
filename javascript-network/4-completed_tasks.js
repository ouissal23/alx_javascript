const request = require('request');
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please enter the API URL .');
  process.exit(1);
}
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else {
    try {
      const todosData = JSON.parse(body);
      const completedTasksCount = todosData.reduce((result, todo) => {
        if (todo.completed) {
          result[todo.userId] = (result[todo.userId] || 0) + 1;
        }
        return result;
      }, {});

      console.log(completedTasksCount);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError.message);
    }
  }
});