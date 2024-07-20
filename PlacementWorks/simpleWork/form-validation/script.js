let personName = document.getElementById("name");
let gender = document.getElementById("gender");
let email = document.getElementById("email");
let pwd = document.getElementById("pass");
function validate(){
    if(email.value === "sam@gmail.com" && pwd.value === "123qweasd"){
        alert("name: "+personName.value+"\n"+"gender: "+gender.value+"\n"+personName.value+" is an authorized person");
    }else{
        alert(personName.value+" is not an authorized person");
    }
}