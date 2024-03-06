document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');
    error.textContent = '';
    if (!validatePassword(password)) {
      error.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.';
    } else {
      this.submit();
    }
  });
  
  function validatePassword(password) {
    const minLength = 8;
    const upperCaseRegex = /[A-Z]/;
    const lowerCaseRegex = /[a-z]/;
    const numericRegex = /[0-9]/;
    const specialCharRegex = /[*.,-_]/;
    if (password.length < minLength) {
        return false;
    }
    if (!upperCaseRegex.test(password)) {
        return false;
    }
    if (!lowerCaseRegex.test(password)) {
        return false;
    }
    if (!numericRegex.test(password)) {
        return false;
    }
    if (!specialCharRegex.test(password)) {
       return false;
    }
    return true;
  }