let count = 0;

const countDisplay = document.querySelector("#count");

const increaseButton = document.querySelector("#increase");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");

increaseButton.addEventListener("click", function () {
    count = count + 1;
    countDisplay.textContent = count;
});

decreaseButton.addEventListener("click", function () {
    count = count - 1;
    countDisplay.textContent = count;
});

resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});