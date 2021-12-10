window.onload = () => {
    var form = document.getElementById("form");
    var errorsForm = document.getElementById("errors");
    form.onsubmit = () => {
        var err = false;
        clearErrors();
        if (!checkPassword()) {
            showError("Password must be at least 6 characters long and must start with an alphabet and must have at least 1 digit and 1 uppercase")
            err = true;
        }
        if (document.getElementById("Password").value != document.getElementById("RePassword").value) {
            showError("Password not same");
            err = true;
        }
        if (!checkUsername()) {
            showError("Username must start with an alphabet, must have at least 6 characters")
            err = true;
        }
        if (!err)
            window.alert("Success!");
        return !err;
    }
}

function clearErrors() {
    document.getElementById('error-list').innerHTML = "";
}

function checkPassword() {
    var pass = document.getElementById('Password').value;
    if (pass.length < 6)
        return false;
    if (!pass[0].match(/[A-Za-z]/i))
        return false;
    if (!pass.match(/[A-Z]/i))
        return false;
    if (!pass.match(/[0-9]/i))
        return false;
    return true;
}

function checkUsername() {
    var username = document.getElementById("Username").value;
    if (!username[0].match(/[A-Za-z]/i) || username.length < 6)
        return false;
    return true;
}

function showError(err) {
    var element = document.createElement('li');
    var textNode = document.createTextNode(err);
    element.appendChild(textNode);
    var errors = document.getElementById('error-list')
    errors.appendChild(element);
}
