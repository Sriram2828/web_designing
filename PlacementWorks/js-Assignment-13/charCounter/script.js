const inputText = document.getElementById('inputText');
const totalChars = document.getElementById('totalChars');
const remainingChars = document.getElementById('remainingChars');
const maxChars = inputText.maxLength;

inputText.addEventListener('input', () => {
    const currentLength = inputText.value.length;
    totalChars.textContent = currentLength;
    remainingChars.textContent = maxChars - currentLength;
});
