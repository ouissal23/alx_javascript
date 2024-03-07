const form = document.getElementById('submitForm');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const error = document.getElementById('error');
    const success = document.getElementById('success');
    if (name === '' || email === '') {
        error.textContent = 'Please fill in all required fields';
    } 
    else {
        success.textContent = 'Form submitted successfully!';
    }
}