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
        document.getElementById("alert-danger").classList.remove("show");
        showAlertSuccess()
    } else {
        document.getElementById("alert-success").classList.remove("show")
        showAlertError()
    }
}

document.getElementById("regBtn").onclick = function() {funcionBoton()}