let logOutBtn=document.querySelector("#logOut");
let userNameMessage=document.querySelector("#welcomeName");


if(localStorage.getItem("username")!= null){
    userNameMessage.innerHTML=`welcome ${localStorage.getItem("username")}`;
}


function logOut(){
    window.location.href="index.html";
    localStorage.removeItem("username");
}

logOutBtn.addEventListener("click",logOut);