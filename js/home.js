var logoutButtn = document.getElementById("logout");
var welcomeUserSpan = document.getElementById("welcomeUserName");


welcomeUserSpan.innerHTML = localStorage.getItem("currentUserName");

function logoutFunction(){
    window.location.href = "login.html";
    localStorage.removeItem("currentUserName");
}

logoutButtn.onclick = logoutFunction;