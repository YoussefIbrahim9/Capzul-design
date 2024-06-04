var logoutButtn = document.getElementById("logout");
var welcomeUserSpan = document.getElementById("welcomeUserName");

console.log(welcomeUserSpan);



function logoutFunction(){
    window.location.href = "login.html";
}

logoutButtn.onclick = logoutFunction;