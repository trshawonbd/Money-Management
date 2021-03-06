function expenseCalculation (){

    /* expense calculation  */
    let income = incomeField();
    const expenses = document.getElementsByClassName('expense');
    let expense = 0;
    for(let i = 0; i<expenses.length; i++){
        let element = expenses[i];
        
        const expenseInText = element.value;
        if(element.value == ''){
            /* sometimes we may not put every details that is why we have to have skip procedure */
            continue;  
        }
        else if(expenseInText < 0){

            /* show error message if any  negative number can be found */
            return (document.getElementById  ( 'error-clothes').innerText = "any field can't be negative"); 

        }
        expense = expense + parseFloat(expenseInText);     
    }
        if ( income< expense){
            /* show if there is no sufficient income */
            return "Please check your income. Not sufficient to spend.";
        }
        else if(income == '' || expense<0 ){
            /* show error message if there is string and negative values */
            return "You have to put valid input";
        }
    return expense;
}

function incomeField(){
    /* common function which will use for different perspectives */
    const incomeField = document.getElementById('income');
    const incomeInText = incomeField.value;
    const income = parseFloat(incomeInText);
    if (income < 0 ){

       return (document.getElementById('error-income').innerText = "Income field can't be negative"); 
    }
    else if (incomeField.value == ""){    
        return (document.getElementById('error-income').innerText = "Income field can't be empty");
    }
    document.getElementById('error-income').innerText = "";
    return income;
}

function balanceCalculation(){
    /* balance calculation for getting current balance */
    let income = incomeField();
    let expense = expenseCalculation ();

    if (income >= expense){
        const balance = income - expense;
        return balance;
    }

}

function savingPercentage(){
    /* percentage calculation */
    const income = incomeField();
    const savingPercentageField = document.getElementById('savings-percentage');
    const savingPercentageText =  savingPercentageField.value;
    const savingPercentageNumber = parseFloat(savingPercentageText);
    const savingAmountInDecimal =(income * savingPercentageNumber)/100;
    const savingAmount = savingAmountInDecimal;
    if(savingAmount>= 0){
        return savingAmount;
    }
    else{
        return "You have not sufficient amount for savings"
    }
    

}

function remainingBalance (){
    /* remaining balance calculation by substract savings from current balance */
    const finalBalanceField = document.getElementById('final-balance');
    const finalBalanceFieldText = finalBalanceField.innerText;
    const finalBalance = parseFloat(finalBalanceFieldText);
    const savingAmount = savingPercentage();
    const remainingBalance = finalBalance - savingAmount;
    const remainingBalanceWithDecimal = remainingBalance;
    if((remainingBalanceWithDecimal !== undefined) && (finalBalance > savingAmount) ){
        return remainingBalanceWithDecimal;
    }
    else{
        return "If you have no money, there is no chance to have remain money"
    }
    
}



document.getElementById('calculator-btn').addEventListener('click', function(){  

    /* calculator button clicked */
    const expense = expenseCalculation();

    const totalExpensesField = document.getElementById('total-expenses');
    if (expense === undefined){
        totalExpensesField.innerText = "Please check your income and expenses";
        totalExpensesField.style.color = "red";
    }
    totalExpensesField.style.color = "";
    totalExpensesField.innerText = expense;
    const balance = balanceCalculation();
    const finalBalance = document.getElementById('final-balance');
    if (balance === undefined){
        finalBalance.innerText = "Please check your income and expenses very carefully.";
        finalBalance.style.color = "red";
    }
    else{
        console.log (finalBalance.innerText = balance);
        finalBalance.style.color = "";
    }
    
    
    document.getElementById ('food-expense').value = '';
    document.getElementById ('rent-expense').value = '';
    document.getElementById ('clothes-expense').value = '';

});

document.getElementById('savings-btn').addEventListener('click', function(){
    /* savings button clicked */
    const savingAmount = savingPercentage();
    const savingAmountField = document.getElementById('savings-amount');
    savingAmountField.innerText = savingAmount;
    const remainAmount = remainingBalance ();
    const remainAmountField = document.getElementById('remain-balance');
     
    if (isNaN(remainAmount)){
        remainAmountField.innerText = "Please check your current balance";
        remainAmountField.style.color = 'red';
        console.log(remainAmountField.innerText)
    }
    else{
        remainAmountField.style.color = '';
        remainAmountField.innerText = remainAmount;
    }
    document.getElementById ('income').value = '';

})