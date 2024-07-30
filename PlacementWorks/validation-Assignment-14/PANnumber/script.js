function validation() {
    var text = document.getElementById('pan').value;
    var msg = document.getElementById('valid');
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (panRegex.test(text)) {
        msg.innerHTML = "Valid PAN Number";
    } else {
        msg.innerHTML = "Invalid PAN Number";
    }
}