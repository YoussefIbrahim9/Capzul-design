var userNameVar = document.getElementById("userName");
var userEmailVar = document.getElementById("userEmail");
var userDateVar = document.getElementById("dateInput");
var userPasswordVar = document.getElementById("userPassword");
var userPasswordConfirmVar = document.getElementById("userRepeatingPassword");
var policiesCheckVar = document.getElementById("userAgree");
var btn = document.getElementById("submitButton");

var userAlertP = document.getElementById("userAlert");
var userEmailAlertP = document.getElementById("userEmailAlert");
var userDateAlertP = document.getElementById("userDateAlert");
var userPasswordAlertP = document.getElementById("userPasswordAlert");
var userPassowrdConfirmAlertP = document.getElementById("userRepeatPasswordAlert");
var userAgreeAlertP = document.getElementById("userAgreePolicy");

var showPassButton = document.getElementById("showPassBtn");
var showRepPassButton = document.getElementById("showRepPassBtn");

var hidePassbutton = document.getElementById("hidePassBtn");
var hideRepPassButton = document.getElementById("hideRepPassBtn");

var usersInfoList = [];

if(usersInfoList.length != 0){
    localStorage.setItem("Userinfo",JSON.stringify(usersInfoList));
}

showPassButton.onclick = showpass;
hidePassbutton.onclick = hidepass;

showRepPassButton.onclick = showRepPass;
hideRepPassButton.onclick = hideRepPass;

btn.onclick = submitData;



function serchDuplicate(obj){
    for(var i =0;i <usersInfoList.length;i++){

        if(usersInfoList[i].uName==obj.uName && usersInfoList[i].uEmail==obj.uEmail && usersInfoList[i].uPassword==obj.uPassword){
            return false
        }
    }
        return true
}

function submitData(){
    
    IsUserInputValid() 
    IsEmailInputValid()
    IsBirthValid()
    IsPasswordValid()
    DoPasswordsMatch()
    agreed()
    if(IsUserInputValid() && IsEmailInputValid() && IsBirthValid() && IsPasswordValid() &&  DoPasswordsMatch() && agreed()){
        user ={
            uName: userNameVar.value,
            uEmail: userEmailVar.value,
            uPassword: userPasswordVar.value,
        }

        if(serchDuplicate(user)==false){
            userAgreeAlertP.classList.remove("d-none");
            userAgreeAlertP.innerHTML = "The user already exists"

        }
        else{
            usersInfoList.push(user);
            localStorage.setItem("Userinfo",JSON.stringify(usersInfoList));
            userAgreeAlertP.classList.add("d-none");

            window.location.href = "login.html";

        }

    }
}

function IsUserInputValid(){
    if(userNameVar.value == ""){
        userAlertP.classList.remove("d-none");
        return false;
    }
    userAlertP.classList.add("d-none");
    return true;
}

function IsEmailInputValid(){

    var regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(userEmailVar.value == ""){
        userEmailAlertP.innerHTML = "*This field is required"
        userEmailAlertP.classList.remove("d-none");
        return false;
    }
    if(!regex.test(userEmailVar.value)){
        userEmailAlertP.innerHTML = "Must be a valid Gmail"
        userEmailAlertP.classList.remove("d-none");
        return false
    }
    else{
        userEmailAlertP.classList.add("d-none");
        return true;
    }
}

function IsBirthValid(){
    if(userDateVar.value == ""){
        userDateAlertP.innerHTML = "*This field is required"
        userDateAlertP.classList.remove("d-none");
        return false;
    }
    if(userDateVar.value != ""){
        var inputYear = userDateVar.value.slice(0,4);
        var currentYear = new Date().getFullYear();
        var reslt = currentYear- inputYear ;

        if(reslt <= 0 | reslt >= 110 ){
            userDateAlertP.innerHTML = "Must be a valid input"
            userDateAlertP.classList.remove("d-none");
            return false;
        }
        else{
            userDateAlertP.classList.add("d-none");
            return true;
        }
    }

}

function IsPasswordValid(){
    regex =/(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{12,}/

    if(userPasswordVar.value == ""){
        userPasswordAlertP.innerHTML = "*This field is required"
        userPasswordAlertP.classList.remove("d-none");
        return false;
    }
    else{
        if(!regex.test(userPasswordVar.value)){
            userPasswordAlertP.innerHTML = "Must be at least 12 characters, at least one number, and at least one special character"
            userPasswordAlertP.classList.remove("d-none");
            return false;
        }
        else{
            userPasswordAlertP.innerHTML = ""
            userPasswordAlertP.classList.add("d-none");
            return true;
        }
    }
}

function DoPasswordsMatch(){
    if(userPasswordConfirmVar.value == ""){
        userPassowrdConfirmAlertP.innerHTML = "*This field is required"
        userPassowrdConfirmAlertP.classList.remove("d-none");
        return false;
    }
    else{
        if(userPasswordConfirmVar.value != userPasswordVar.value){
            userPassowrdConfirmAlertP.innerHTML = "Passwords should match"
            userPassowrdConfirmAlertP.classList.remove("d-none");
            return false;
        }
        else{
            userPassowrdConfirmAlertP.innerHTML = ""
            userPassowrdConfirmAlertP.classList.add("d-none");
            return true;
        }
    }

}

function agreed(){
    if(!policiesCheckVar.checked){
        userAgreeAlertP.innerHTML = "*This field is required"
        userAgreeAlertP.classList.remove("d-none");
        return false;
    }
    else{
        userAgreeAlertP.innerHTML = ""
        userAgreeAlertP.classList.add("d-none");
        return true
    }
}


function showpass(){
    if(userPasswordVar.value != ""){
        userPasswordVar.setAttribute('type', 'text')
        showPassButton.classList.add("d-none");
        hidePassbutton.classList.remove("d-none");
    }

}

function hidepass(){
    if(userPasswordVar.value != ""){
        userPasswordVar.setAttribute('type', 'password')
        showPassButton.classList.remove("d-none");
        hidePassbutton.classList.add("d-none");
    }

}

function showRepPass(){
    if(userPasswordConfirmVar.value != ""){
        userPasswordConfirmVar.setAttribute('type', 'text')
        showRepPassButton.classList.add("d-none");
        hideRepPassButton.classList.remove("d-none");
    }

}

function hideRepPass(){
    if(userPasswordConfirmVar.value != ""){
        userPasswordConfirmVar.setAttribute('type', 'password');
        showRepPassButton.classList.remove("d-none");
        hideRepPassButton.classList.add("d-none");
    }
}