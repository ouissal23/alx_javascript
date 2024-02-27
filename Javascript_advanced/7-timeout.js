console.log('Start of the execution queue');

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

console.log('End of the loop printing');

setTimeout(() => {
  console.log('Final code block to be executed');
});