let nameUser = document.getElementById("nameUser");
let emailUser = document.getElementById("emailUser");
let passwordUser = document.getElementById("passwordUser");
let bottomUser = document.getElementById("bottomUser");
let alertMessage = document.getElementById("alertMessage");
let containerUser = [];
if(localStorage.getItem("users") !=null){
    containerUser=JSON.parse(localStorage.getItem("users"))
}
function getUser() {
    let data = {
        name: nameUser.value,
        email: emailUser.value,
        password: passwordUser.value
    }
    if (checkUser() == true) {
        setExist("ALL Input Required", "red")
    }
    else {
        if (checkEmail() == true) {
            setExist("Email Already Exist", "red")
        }
        else {
            containerUser.push(data)
            localStorage.setItem("users",JSON.stringify(containerUser));
            setExist("sucsses", "green")
            clearForm()
            setExist("success", "green")
        }
    }
}
function setExist(text, color) {
    alertMessage.classList.replace("d-none", "d-block");
    alertMessage.style.color = color;
    alertMessage.innerHTML = text;
}
function checkUser() {
    if (nameUser.value == "" || emailUser.value == "" || passwordUser.value == "") {
        return true
    } else
        return false
}
function checkEmail() {
    for (let i = 0; i < containerUser.length; i++) {
        if (containerUser[i].email == emailUser.value)
            return true
    }
}
function clearForm() {
    nameUser.value = '';
    emailUser.value = '';
    passwordUser.value = '';
}
bottomUser.addEventListener("click", getUser)
