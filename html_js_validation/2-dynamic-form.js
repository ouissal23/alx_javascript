const form = document.getElementById('dynamicForm');
const inputContainer = document.getElementById('inputContainer');
const numFields = document.getElementById('numFields');

numFields.addEventListener('change', generateInputFields);
form.addEventListener('submit', validateForm);

function generateInputFields() {
    inputContainer.innerHTML = '';
    const num = parseInt(numFields.value);
    for (let i = 1; i <= num; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `field${i}`;
        inputContainer.appendChild(input);
    }
}

function validateForm(event) {
    event.preventDefault();
    const inputs = inputContainer.getElementsByTagName('input');
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        form.submit();
    } 
    else {
        alert('Please fill in all fields');
    }
}