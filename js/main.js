let emailInput=document.getElementById("emailInput");
let passwordInput=document.getElementById("passwordInput");
let bottomLog=document.getElementById("bottomLog");
let alertMessage = document.getElementById("alertMessage");
let containerUser = [];

if (localStorage.getItem("users")!=null) {
    containerUser = JSON.parse(localStorage.getItem("users"))
    
}

function login(){
    if(checkValue()==true){
        window.location.href="home.html"
    }else{
        setExist("Email Or Passwors not correct", "red")
    }
}
function checkValue(){
    for (let i = 0; i < containerUser.length; i++) {
      if (containerUser[i].email==emailInput.value && containerUser[i].password==passwordInput.value) {
        localStorage.setItem('users',containerUser[i].name)
        return true
      }
        
    }
}
function setExist(text, color) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.style.color = color;
    alertMessage.innerHTML = text;
}
function checkInputsEmpty() {
    if ( emailInput.value == '' || passwordInput.value == '')
        return true;
    else
        return false;
}
bottomLog.addEventListener("click",login)