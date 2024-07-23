let msg = document.getElementById("msg");
function accept() {
    alert(msg.value+" is accepted👍🏻");
    msg.value="";
}
function decline() {
    alert(msg.value+" is declined❌");
    msg.value="";
}
