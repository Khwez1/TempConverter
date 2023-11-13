// Celsius To Fahrenheit function
function celsiusToFahrenheit() {
    // variable calls value from id
    let fahrenheitInput = document.getElementById('fahrenheit').value;
    // makes sure previous varible is a number
    let fahrenheit = parseFloat(fahrenheitInput);

    if (isNaN(fahrenheit)) {
        alert('Please enter a valid numeric value for temperature.');
        return;
    }
// create variable that calculates via Fahrenheit formula
    let celsius = (fahrenheit - 32) * (5/9);
    // makes sure new variable output is rounded off to two decimal places
    let roundedCelsius = celsius.toFixed(2);
    
// fetches output from latest varible and adds it to the celsius id
    document.getElementById('celsius').value = roundedCelsius;
}

// Fahrenheit To celsius function
function fahrenheitToCelsius() {
    // variable calls value from id
    let celsiusInput = document.getElementById('celsius').value;
    // makes sure previous varible is a number
    let celsius = parseFloat(celsiusInput);

    if (isNaN(celsius)) {
        alert('Please enter a valid numeric value for temperature.');
        return;
    }
// create variable that calculates via celsius formula
    let fahrenheit = (celsius * 5/9) + (32);
    // makes sure new variable output is rounded off to two decimal places
    let roundedfahrenheit = fahrenheit.toFixed(2);
    
// fetches output from latest varible and adds it to the celsius id
    document.getElementById('fahrenheit').value = roundedfahrenheit;
}