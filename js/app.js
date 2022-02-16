function expenseCalculation (){
    const expenses = document.getElementsByClassName('expense');
    let expense = 0;
    for(let i = 0; i<expenses.length; i++){
        let element = expenses[i];
        const expenseInText = element.value;
        expense = expense + parseFloat(expenseInText);
        
        
    } 
    return expense;
}

function balanceCalculation(){
    const incomeField = document.getElementById('income');
    const incomeInText = incomeField.value;
    const income = parseFloat(incomeInText);
    const expense = expenseCalculation ();
    const balance = income - expense;
    return balance;
}


document.getElementById('calculator-btn').addEventListener('click', function(){
    
    const expense = expenseCalculation();
/*    
const expenses = document.getElementsByClassName('expense');
let expense = 0;
    for(let i = 0; i<expenses.length; i++){
        let element = expenses[i];
        const expenseInText = element.value;
        expense = expense + parseFloat(expenseInText);
        
        
    } */
    const totalExpensesField = document.getElementById('total-expenses');
    totalExpensesField.innerText = expense;
    const balance = balanceCalculation();
    const finalBalance = document.getElementById('final-balance');
    finalBalance.innerText = balance;

})