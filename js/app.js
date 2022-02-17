// getting input value

function getValues(inputID) {
    const cost = parseFloat(document.getElementById(inputID).value);
    if (cost <= 0) {
        document.getElementById('negative-value').style.display = 'block';
    }
    else {
        document.getElementById('negative-value').style.display = 'none';
        cost.value = '';
        return cost;
    }

}


// calculating total cost


function costCalculate() {
    const totalCost = getValues('rent-cost') + getValues('others-cost') + getValues('food-cost');


    const balance = getValues('income-balance') - totalCost;

    if (getValues('income-balance') < totalCost) {
        document.getElementById('spend-more-then-earn').style.display = 'block';
    }
    else {
        document.getElementById('spend-more-then-earn').style.display = 'none';
        document.getElementById('total-expenses').innerText = totalCost;
        document.getElementById('balance').innerText = balance;

    }

    return balance;

}



// calculating remaining balance and saving amount

function savingCalculate() {
    const incomeBalance = getValues('income-balance');
    const savingPercent = getValues('saving-percent');

    const savingAmmount = (savingPercent / 100) * incomeBalance;

    document.getElementById('saving-ammount').innerText = savingAmmount;

    const remainingAmount = costCalculate() - savingAmount;
    if (remainingAmount < 0) {
        document.getElementById('save-more-then-remaining').style.display = 'block'
    }
    else {
        document.getElementById('save-more-then-remaining').style.display = 'none'
        document.getElementById('remaining-amount').innerText = remainingAmount;
    }

}








