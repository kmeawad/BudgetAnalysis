BudgetItem = require('./BudgetItem')
class Income extends BudgetItem{
    constructor(amount, month, year, source){
        super(amount, month, year)
        let __source__

        this.setSource = function(newSource){
            __source__ = newSource;
        }
        this.getSource = function(){
            return __source__;
        }

        this.setSource(source);
    }
    displayInfo(){
        return '"type" : "Income", '+super.displayInfo() + ', "source" : "' + this.getSource()+'"';
    }
}
module.exports = Income;