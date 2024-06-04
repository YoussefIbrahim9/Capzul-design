 

var loginEmailInput = document.getElementById("loginUserName");
var loginPasswordInput = document.getElementById("loginUserPassword");

var loginShowPassBtn = document.getElementById("showLogPassBtn");
var loginHidePassBtn = document.getElementById("hideLogPassBtn");

var loginEmailAlert = document.getElementById("loginUserNameAlert");
var loginPassAlert = document.getElementById("loginPassAlert");

var logInBtn = document.getElementById("signInBtn");

loginShowPassBtn.onclick = showLoginPass;
loginHidePassBtn.onclick = hideLoginPass;
logInBtn.onclick = logginIn ;



function logginIn(){
    loginEmailValidation();
    loginPasswordValidation();
    if(loginEmailValidation() && loginPasswordValidation()){
        window.location.href = "home.html";
        
    }
}

function showLoginPass(){
    if(loginPasswordInput.value != ""){
        loginPasswordInput.setAttribute('type', 'text')
        loginShowPassBtn.classList.add("d-none");
        loginHidePassBtn.classList.remove("d-none");
    }
}

function hideLoginPass(){
    if(loginPasswordInput.value != ""){
        loginPasswordInput.setAttribute('type', 'password');
        loginShowPassBtn.classList.remove("d-none");
        loginHidePassBtn.classList.add("d-none");
    }
}

function loginPasswordValidation(){
    if(loginPasswordInput.value == ""){
        loginPassAlert.innerHTML = "*This field is required";
        loginPassAlert.classList.remove("opacity-0");
    }
    else{
        if(localStorage.length == 0){
            loginPassAlert.innerHTML = "Sign up first";
            loginPassAlert.classList.remove("opacity-0");
        }
        else{
            var arr = JSON.parse(localStorage.getItem("Userinfo")) ;
            for(var i = 0 ;i< arr.length ; i++){
                if(arr[i].uPassword == loginPasswordInput.value){
                    loginPassAlert.classList.add("opacity-0");
                    return true
                }
            }
            loginPassAlert.innerHTML = "*This password is incorrect";
            loginPassAlert.classList.remove("opacity-0");
            return false
        }

        
    }
}

function loginEmailValidation(){
    if(loginEmailInput.value == ""){
        loginEmailAlert.innerHTML = "*This field is required";
        loginEmailAlert.classList.remove("opacity-0");
    }
    else{
        
        if(localStorage.length == 0){
            loginEmailAlert.innerHTML = "Sign up first";
            loginEmailAlert.classList.remove("opacity-0");
        }
        else{
            var arr = JSON.parse(localStorage.getItem("Userinfo")) ;
            for(var i = 0 ; i < arr.length ; i++){
                if(arr[i].uName.toLowerCase() == loginEmailInput.value.toLowerCase()){
                    loginEmailAlert.classList.add("opacity-0");
                    return true
                }
            }
            loginEmailAlert.innerHTML = "*This username is incorrect";
            loginEmailAlert.classList.remove("opacity-0");
            return false
        }

    }
}

