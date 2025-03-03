document.getElementById('cash-out').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("agent-number").value;

    const amount = getInputValueById("cashOut-amount");
    const pinNumber = getInputValueById("cashOut-pin");
    const mainBalance = getInnerTextById("main-balance");

    if(amount>mainBalance){
        alert("Invalid Amount");
        return;
    }

    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIDandValue("main-balance", sum);

            const container = document.getElementById("transaction-container");
            const p = document.createElement("p");
            p.innerText = `
            cashout ${amount} from this ${accountNumber} account
            `
            container.appendChild(p);
        }
        else {
            alert("Enter valid Pin.")
        }
    }
    else {
        alert("Enter Amount and Pin.");
    }
})