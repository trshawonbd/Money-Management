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

})