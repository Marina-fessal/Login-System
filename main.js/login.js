let signinEmailInput=document.querySelector("#signinEmail");
let signinPasswordInput=document.querySelector("#signinPassword");
let loginBtn=document.querySelector("#login");
let  alertMessage=document.querySelector("#alertMessage");
let userAccount=[];
if(localStorage.getItem("users") !=null){
    userAccount=JSON.parse(localStorage.getItem("users"));
}
function logIn(){
    if(checkInputs()==true){
        getAlertMessage("All Inputs are Required","red");
    }else
    {
        if(checkEmailPass() == true)
        {
     window.location.href="home.html";
         }else
         {
             getAlertMessage("Email or password incorrect","red");
         }
    }


  
    
}
function checkEmailPass(){
    for(let i=0;i<userAccount.length;i++){
      if(userAccount[i].email==signinEmailInput.value && userAccount[i].password==signinPasswordInput.value){
       localStorage.setItem("username",userAccount[i].userName)
        return true;
      }
    }
}


function getAlertMessage(text,color){
    alertMessage.classList.replace("d-none","d-block");
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
}
function checkInputs(){
    if( signinEmailInput.value =="" ||signinPasswordInput.value=="")
        return true
    else 
        return false
}

loginBtn.addEventListener("click",logIn);