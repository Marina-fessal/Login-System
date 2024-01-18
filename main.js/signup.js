let signinEmailInput=document.querySelector("#signinEmail");
let signinPasswordInput=document.querySelector("#signinPassword");
let signinNameInput=document.querySelector("#signinName");
let signupBtn=document.querySelector("#signup");
let  alertMessage=document.querySelector("#alertMessage");
let alertMessagecheck=document.querySelector("#alertMessagecheck");
let userAccount=[];
if(localStorage.getItem("users")!= null){
    userAccount=JSON.parse(localStorage.getItem("users"));
}


function signUp(){
    if(isValidEmail()==true){
    let data={
    userName:signinNameInput.value,
    email:signinEmailInput.value,
    password:signinPasswordInput.value,
    }
    if(checkInputs()==true){
        getAlertMessage("All inputs are Required","red");
    }
    else{
       
       if(checkEmail()== true){
        getAlertMessage("Email Already Exist");
       }
       else{
        userAccount.push(data);
        localStorage.setItem("users",JSON.stringify(userAccount));
        getAlertMessage("success","green");
        clearForm();
        console.log(data);
       }}
       
    }
    
}
function getAlertMessage(text,color){
    alertMessage.classList.replace("d-none","d-block");
    alertMessage.innerHTML=text;
    alertMessage.style.color=color;
}

signupBtn.addEventListener("click",signUp);


function clearForm(){
    signinNameInput.value="";
    signinEmailInput.value="";
    signinPasswordInput.value="" ;
}


function checkInputs(){
    if( signinNameInput.value==""||signinEmailInput.value =="" ||signinPasswordInput.value=="")
        return true
    else 
        return false
}

function checkEmail(){
    for(let i=0;i<userAccount.length;i++){
        if(userAccount[i].email== signinEmailInput.value)
        return true;
    }
}

function isValidEmail() {
    let Regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (Regex.test(signinEmailInput.value)==true){
        signinEmailInput.style.border="1px solid white";
        document.getElementById("wrongEmail").classList.add("d-none");
        return true;
    }else{
        signinEmailInput.style.border="5px solid red";
        document.getElementById("wrongEmail").classList.remove("d-none");
        return false;
    }
}

