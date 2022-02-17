
// function getValues(inputID) {
//     const incomeBalance = document.getElementById("income-balance").value;
//     const foodCost = parseFloat(document.getElementById('food-cost').value);
//     const othersCost = parseFloat(document.getElementById('others-cost').value);
//     const rentCost = parseFloat(document.getElementById('rent-cost').value);

// }







// function getValues(inputID) {
//     const cost = parseFloat(document.getElementById(inputID).value);
//     cost.value = '';
//     return cost;
// }



// function getValues(inputID) {
//     const cost = parseFloat(document.getElementById(inputID).value);
//     const totalCost = [getValues('rent-cost'), getValues('food-cost'), getValues('others-cost')];
//     for(const costs of totalCost){
//         if(costs < 0){
//             console.log('negetive cost is not allowed');
//         }
//     }

//     cost.value = '';
//     return cost;
// }



function costCalculate() {
    const incomeBalance = document.getElementById("income-balance").value;
    const foodCost = parseFloat(document.getElementById('food-cost').value);
    const othersCost = parseFloat(document.getElementById('others-cost').value);
    const rentCost = parseFloat(document.getElementById('rent-cost').value);

    const totalCost = rentCost + foodCost + othersCost;
    const balance = incomeBalance - totalCost;

    document.getElementById('total-expenses').innerText = totalCost;
    document.getElementById('balance').innerText = balance;
    


}



































