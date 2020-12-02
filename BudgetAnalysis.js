 BudgetItem = require("./BudgetItem");
 Expense = require("./Expense");
 Income = require("./Income");

class BudgetAnalysis{
    constructor(data){
        let __Items__ = [];
        let __expenses__ = []
        let __incomes__ = []

        this.setItems = function(newItem){
            __Items__.push(newItem);
        }
        this.getItems = function(){
            return __Items__;
        }
        this.setExpenses = function(newExpense){
            __expenses__.push(newExpense);
        }
        this.getExpenses = function(){
            return __expenses__;
        }
        this.setIncomes = function(newIncome){
            __incomes__.push(newIncome);
        }
        this.getIncomes = function(){
            return __incomes__;
        }
    }
    add(data){
        let Item = [];

        for (let d of data){
            switch(d.type){
                case "Other":
                    Item = new BudgetItem(d.amount, d.month, d.year);
                    break;
                case "Expense":
                    Item = new Expense(d.amount, d.month, d.year, d.destination, d.spender);
                    this.setExpenses(Item);
                    break;
                case "Income":
                    Item = new Income(d.amount, d.month, d.year, d.source);
                    this.setIncomes(Item);
            }
            this.setItems(Item);
        }
        return this.getItems();
    }

    itemByMonth(searchYear, searchMonth, type = this.getItems()){
        let matchingItems = [];
        let allItems = this.itemByYear(searchYear, undefined, type);
        
        for(let i of allItems){
            if(i.getMonth() == searchMonth)
                matchingItems.push(i);
        }
        return matchingItems;
    }

    itemByYear(searchYear, month= undefined,type = this.getItems()){
        let matchingItems = [];
        let allItems = type;
        
        for(let i of allItems){
            if(i.getYear() === searchYear)
                matchingItems.push(i);
        }
        return matchingItems;
    }

    revenueByMonth(searchYear, searchMonth){
        let expenses = this.itemByMonth(searchYear, searchMonth, this.getExpenses());
        let incomes = this.itemByMonth( searchYear, searchMonth, this.getIncomes());
        let sumOfExpense= 0;
        let sumOfIncome = 0;
        for(let i of expenses)
            sumOfExpense += i.getAmount();
        for(let j of incomes)
            sumOfIncome += j.getAmount();
        
        return sumOfIncome - sumOfExpense   
    }

    revenueByYear(searchYear){
        let expenses = this.itemByYear(searchYear, undefined,this.getExpenses());
        let incomes = this.itemByYear(searchYear, undefined, this.getIncomes());
        let sumOfExpense= 0;
        let sumOfIncome = 0;
        for(let i of expenses)
            sumOfExpense += i.getAmount();
        for(let j of incomes)
            sumOfIncome += j.getAmount();
        
        return sumOfIncome - sumOfExpense   
    }
}
module.exports = BudgetAnalysis;