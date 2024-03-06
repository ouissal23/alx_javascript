document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');
    error.textContent = '';
    if (!validateEmail(email)) {
      error.textContent = 'Please enter a valid email address.';
    } 
    else {
      this.submit();
    }
  });
  
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }