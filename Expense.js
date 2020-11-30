 BudgetItem = require("./BudgetItem");

BudgetItem = require('./BudgetItem')
class Expense extends BudgetItem{
    constructor(amount, month, year, destination, spender){
        super(amount, month, year);
        let __destination__;
        let __spender__;
        
        this.setDestination = function(newDestination){
            __destination__ = newDestination;
        }
        this.getDestination = function(){
            return __destination__
        }
        
        
        this.setSpender = function(newSpender){
            __spender__ = newSpender;
        }
        this.getSpender = function(){
            return __spender__;
        }

        this.setDestination(destination);
        this.setSpender(spender);
    }
    displayInfo(){
        return '"type" : "Expense", '+super.displayInfo() + ', "destination" : "'+this.getDestination()+ '", "spender" : "' + this.getSpender()+'"'
    }
}

module.exports = Expense;