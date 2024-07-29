function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid values.");
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
}
