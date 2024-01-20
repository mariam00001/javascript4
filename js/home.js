let welcomMesssage=document.getElementById("welcomMesssage");
let bottomHome=document.getElementById("bottomHome");


if(localStorage.getItem("users") !=null){
    welcomMesssage.innerHTML=`Welcome ${localStorage.getItem("users")}`
}
function logOut(){
    window.location.href="index.html";
    localStorage.removeItem("users");
}
bottomHome.addEventListener("click",logOut)