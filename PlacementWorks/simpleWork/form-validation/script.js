let email = document.getElementById("email");
let pwd = document.getElementById("pass");
function validate(){
    if(email.value === "sam@gmail.com" && pwd.value === "123qweasd"){
        alert("valid");
    }else{
        alert("not valid");
    }
}