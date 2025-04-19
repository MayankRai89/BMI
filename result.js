function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultDiv = document.getElementById("result");

    if (weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);
    resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2);
}