function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");

}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function repContraseña() {
    var password = document.getElementById("password1").value;
    var confirm_password = document.getElementById("password2").value;
    
    if (password !== confirm_password) {
        showAlertError();
        return false;
    }
    else {
        showAlertSuccess();
        return true;
    }
}