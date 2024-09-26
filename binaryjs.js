function convertBinaryToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const binaryToDecimalResult = document.getElementById('binaryToDecimalResult');

    // Check if the input is a valid binary number
    if (/^[01]+$/.test(binaryInput)) {
        // Convert binary to decimal
        const decimal = parseInt(binaryInput, 2);
        binaryToDecimalResult.textContent = `Decimal: ${decimal}`;
    } else {
        binaryToDecimalResult.textContent = 'Please enter a valid binary number (0s and 1s only).';
    }
}

// Function to convert Decimal to Binary
function convertDecimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const decimalToBinaryResult = document.getElementById('decimalToBinaryResult');

    // Check if the input is a valid decimal number
    if (!isNaN(decimalInput) && decimalInput.trim() !== '') {
        // Convert decimal to binary
        const binary = parseInt(decimalInput, 10).toString(2);
        decimalToBinaryResult.textContent = `Binary: ${binary}`;
    } else {
        decimalToBinaryResult.textContent = 'Please enter a valid decimal number.';
    }
}