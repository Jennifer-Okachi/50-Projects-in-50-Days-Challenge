const bmiform = document.getElementById("bmiform");

const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const resultDiv = document.getElementById("result");
const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");
const bmiMessage = document.getElementById("bmiMessage");

function calculateBMI(weight, height) {
    return weight / (height ** 2);
}

bmiform.addEventListener("submit", function(event){
    event.preventDefault();
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    this.ariaErrorMessageElements.textContent = "";

    //validate inputs

    if(
        !weightInput.value ||
        !heightInput.value ||
        !Number.isFinite(weight)||
        !Number.isFinite(height)||
        weight <= 0 ||
        height <= 0
     ) {
        this.ariaErrorMessageElements.textContent =
        "Please enter valid weight and height value"

        resultSection.hidden = true;
        return;
    }

    //perform calculation
    const bmi = calculateBMI(weight, height);

    if (!Number.isFinite(bmi)){
        errorMessage.textContent =
        "unable to calculate BMI. Check your inputs";

        resultSection.hidden = true;
        return;
    }

    const category = getBMI(bmi);
})