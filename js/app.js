function expenseCalculation (){
    let income = incomeField();
    const expenses = document.getElementsByClassName('expense');
    let expense = 0;
    for(let i = 0; i<expenses.length; i++){
        let element = expenses[i];
        
        const expenseInText = element.value;
        if(expenseInText == ''){
            continue;
        }
        expense = expense + parseFloat(expenseInText); 
         
    }
        if ( income< expense){
            return "Please check your income. Not sufficient to spend.";
        }
        else if (income == '' ){
            return "You have to put some input";
        }

 

    return expense;
}

function incomeField(){
    const incomeField = document.getElementById('income');
    const incomeInText = incomeField.value;
    const income = parseFloat(incomeInText);
    return income;
}

function balanceCalculation(){
    const x = document.getElementById('income').value;
    let income = incomeField();
    let expense = expenseCalculation ();
    const message = document.getElementById("error-income");
    message.innerHTML = '';
    

    if (income >= expense){
        const balance = income - expense;
        return balance;
    }
    else if(income < expense){
        return "Your income is not sufficient to spend your expenses"
    }   
   else {
        try{
            if(x == "") throw "empty";
            else if(isNaN(x)) throw "not a number";
            x = Number(x);
           
        }
        catch(err) {
            return (message.innerHTML = "Input is " + err);
          }
        
    } 

}

function savingPercentage(){
    const income = incomeField();
    const savingPercentageField = document.getElementById('savings-percentage');
    const savingPercentageText =  savingPercentageField.value;
    const savingPercentageNumber = parseFloat(savingPercentageText);
    const savingAmountInDecimal =(income * savingPercentageNumber)/100;
    const savingAmount = savingAmountInDecimal.toFixed(2);
    return savingAmount;

}



document.getElementById('calculator-btn').addEventListener('click', function(){

    
    const expense = expenseCalculation();
    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = expense;
    const balance = balanceCalculation();
    console.log(balance);
    const finalBalance = document.getElementById('final-balance');
    if (balance === undefined){
        finalBalance.innerText = "Please check your income and expenses";
    }
    else{
        console.log (finalBalance.innerText = balance);
    }
    
    
    
    document.getElementById ('food-expense').value = '';
    document.getElementById ('rent-expense').value = '';
    document.getElementById ('clothes-expense').value = '';

})

document.getElementById('savings-btn').addEventListener('click', function(){
    const savingAmount = savingPercentage();
    const savingAmountField = document.getElementById('savings-amount');
    console.log(savingAmountField.innerText = savingAmount);
   
})