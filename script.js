let loginGroup    = document.getElementById("easy-login");
let registerGroup = document.getElementById("easy-register");
let slider        = document.getElementById("easy-slider");
function easyRegister() {
    loginGroup.style.left    = "-450px";
    registerGroup.style.left = "50px";
    slider.style.left        = "110px";
}
function easyLogin() {
    loginGroup.style.left    = "50px";
    registerGroup.style.left = "450px";
    slider.style.left        = "0px";
}
easyRegister();