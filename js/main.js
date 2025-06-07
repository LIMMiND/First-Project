function checkEmail() {
    let email = document.querySelector('#emailField').value;
    if(!email.includes('@')) alert('Failed, Please enter a valid "email"');
    else if(!email.includes('.')) alert('Failed, Failed, Please enter a valid "email"');
    else confirm('Save data?');
}