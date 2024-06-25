document.addEventListener('DOMContentLoaded', () => {
    const textBox = document.getElementById('textBox');

    textBox.addEventListener('input', () => {
        textBox.value = textBox.value.toUpperCase();
    });
});
