function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function funcionBoton() {
    if (document.getElementById("password1").value === document.getElementById("password2").value &&
        document.getElementById("password1").value.length >= 6 &&
        document.getElementById("nombre").value !== "" &&
        document.getElementById("apellido").value !== "" &&
        document.getElementById("email").value !== "" &&
        document.getElementById("terminos").checked) {
        showAlertSuccess()
    } else {
        showAlertError()
    }
}

document.getElementById("regBtn").onclick = function() {funcionBoton()}