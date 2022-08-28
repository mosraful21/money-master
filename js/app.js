function getInputFieldValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}
function getById(elementId){
    const getIdValue = document.getElementById(elementId);
    return getIdValue;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const food = getInputFieldValueById('food-field');
    const rent = getInputFieldValueById('rent-field');
    const clithes = getInputFieldValueById('clithes-field');

    const totalCost = food + rent + clithes;
    const totalExp = getById('total-exp');
    totalExp.innerText = totalCost;

    const btnIncome = getInputFieldValueById('btn-income');
    const balanceTotal = getById('balance-total');

    const remainBalance = btnIncome - totalCost;
    balanceTotal.innerText = remainBalance;
});

/*
document.getElementById('save-btn').addEventListener('click', function(){
    const saveField = getInputFieldValueById('save-field');

    const totalExp = getById('total-exp');
    const total = parseFloat(totalExp.innerText);

    const totalNow = total * saveField;
    const savingAmount = getById('saving-amount');
    savingAmount.innerText = totalNow;

    const remaining = getById('remaining-cost');
    const remainingCost = parseFloat(remaining.innerText);

    
});



/*

document.getElementById('btn-save').addEventListener('click', function(){
    const savePercentage = findExpenses('save-amount');

    const balanceElement = getById('balance');
    const balanceNow = parseFloat(balanceElement.innerText);

    const saveAmountNow = savePercentage/100 * balanceNow;
    const remainBalanceNow = balanceNow - saveAmountNow;

    const reaminBalancePrev = getById('remain-balance');
    const savingAmountPrev = getById('saving-amount');
    
    savingAmountPrev.innerText = saveAmountNow;
    reaminBalancePrev.innerText = remainBalanceNow;

})


    // const incomeElement = document.getElementById('btn-income');
    // const income = parseFloat(incomeElement.value);

    // const newBalance = ((income - totalCost).toFixed(2));

    // const balanceTotal = document.getElementById('balance-total');
    // balanceTotal.innerText = newBalance;
});



function findExpenses(elementId)
{
    const AmountElement = document.getElementById(elementId);
    const AmountElementstring = AmountElement.value;
    const Amount = parseFloat(AmountElementstring);
    
}
function getById(elementId){
    const getIdValue = document.getElementById(elementId);
    return getIdValue;
}
document.getElementById('btn-calculate').addEventListener('click',function(){
    const foodAmount = findExpenses('food');
    const rentAmount = findExpenses('rent');
    const clothAmount = findExpenses('cloth');

    const totalExpenses = foodAmount + rentAmount+ clothAmount;
    const prevtotalExpenses = getById('total-expenses')
    prevtotalExpenses.innerText = totalExpenses;

    const incomeAmount = findExpenses('income-amount');

    const balance = getById('balance');
    const remainBalance = incomeAmount - totalExpenses;
    balance.innerText = remainBalance;
})

document.getElementById('btn-save').addEventListener('click', function(){
    const savePercentage = findExpenses('save-amount');

    const balanceElement = getById('balance');
    const balanceNow = parseFloat(balanceElement.innerText);

    const saveAmountNow = savePercentage/100 * balanceNow;
    const remainBalanceNow = balanceNow - saveAmountNow;

    const reaminBalancePrev = getById('remain-balance');
    const savingAmountPrev = getById('saving-amount');
    
    savingAmountPrev.innerText = saveAmountNow;
    reaminBalancePrev.innerText = remainBalanceNow;

})




// function isnot(){
//     if(isNaN()){
//     alert('Please provide a valid number');
//     return;
//     }
// }
*/