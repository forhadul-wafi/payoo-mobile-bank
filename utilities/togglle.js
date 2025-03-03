document.getElementById('cashOut').style.display = "none";
document.getElementById('transaction-history').style.display = "none";

document.getElementById('add-money-box').addEventListener('click',function(){
   handleToggle("addMoney","block");
   handleToggle("cashOut","none");
   handleToggle("transaction-history","none");
})

document.getElementById('cash-out-box').addEventListener('click',function(){
    handleToggle("addMoney","none");
    handleToggle("cashOut","block");
    handleToggle("transaction-history","none");
})

