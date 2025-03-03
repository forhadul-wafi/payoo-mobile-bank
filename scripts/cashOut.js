document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('cashOut-amount').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('cashOut-pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (amount && pin) {
        if (convertedPin === 1234) {
            const sum = convertedMainBalance - convertedAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else {
            alert("Enter valid Pin.")
        }
    }
    else {
        alert("Enter Amount and Pin.");
    }
})