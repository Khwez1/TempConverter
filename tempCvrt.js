function convertToFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const fahrenheit = parseFloat(fahrenheitInput);

    if (isNaN(fahrenheit)) {
        alert('Please enter a valid numeric value for temperature.');
        return;
    }

    const celsius = (fahrenheit - 32) * (5/9);
    const roundedCelsius = celsius.toFixed(2);

    document.getElementById('celsius').value = roundedCelsius;
}