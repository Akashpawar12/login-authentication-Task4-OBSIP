let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick= function(){
    nameField.style.maxHeight = "0";
    title.innerHTML="sign in";
    signupBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

signupBtn.onclick= function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML="sign up";
    signupBtn.classList.remove("disable");
    signupBtn.classList.add("disable");
}
