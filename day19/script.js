const currencySelect = document.getElementById("currency");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");

const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    NGN: 1500
};

function convertCurrency() {
    const amount = parseFloat(amountInput.value) || 0;
    const selectedCurrency = currencySelect.value;
    
    const rate = rates[selectedCurrency] || 1;
    const converted = amount * rate;

    resultDisplay.textContent = `Converted: ${converted.toFixed(2)} ${selectedCurrency}`;
}

amountInput.addEventListener("input", convertCurrency);
currencySelect.addEventListener("change", convertCurrency);