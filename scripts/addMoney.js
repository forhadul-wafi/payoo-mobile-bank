document.getElementById("add-money").addEventListener('click', function (event) {
    event.preventDefault();

    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const account = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById('main-balance');

    const selectBank = document.getElementById("selectBank").value;

    if(amount<0){
        alert("Negative Amount");
        return;
    }

    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            setInnerTextByIDandValue("main-balance", sum);
            const container = document.getElementById("transaction-container");
            const div = document.createElement("div");
            div.classList.add("bg-red-400");
            div.innerHTML = `
            <h1 class="text-yellow-300">Added Money from ${selectBank}</h1>
            <h3>${amount}</h3>
            <p>Account Number : ${account}</p>
            `
            container.appendChild(div);
        }
        else {
            alert("Enter valid Pin.")
        }
    }
    else {
        alert("Enter Amount and Pin.");
    }
})
