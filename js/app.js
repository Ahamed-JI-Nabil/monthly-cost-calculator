function getValues(inputID) {
    const cost = parseFloat(document.getElementById(inputID).value);
    if (cost < 0) {
        console.log('input cant be negative');
    }
    else {
        cost.value = '';
        return cost;
    }
}



function costCalculate() {
    const totalCost = getValues('rent-cost') + getValues('others-cost') + getValues('food-cost');
    const balance = getValues('income-balance') - totalCost;

    document.getElementById('total-expenses').innerText = totalCost;
    document.getElementById('balance').innerText = balance;
    return balance;

}





function savingCalculate() {
    const incomeBalance = getValues('income-balance');
    const savingPercent = getValues('saving-percent');

    const savingAmmount = (savingPercent / 100) * incomeBalance;

    document.getElementById('saving-ammount').innerText = savingAmmount;

    const remainingAmmount = costCalculate() - savingAmmount;
    document.getElementById('remaining-ammount').innerText = remainingAmmount;

}








