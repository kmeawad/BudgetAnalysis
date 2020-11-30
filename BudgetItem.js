class BudgetItem{
    constructor(amount, month, year){
        let __amount__;
        let __month__;
        let __year__; 

        this.setAmount = function(newAmount){
            __amount__ = newAmount;
        }
        this.getAmount = function(){
            return __amount__;
        }

        this.setMonth = function(newMonth){
            __month__ = newMonth;
        }
        this.getMonth = function(){
            return __month__;
        }

        this.setYear = function(newYear){
            __year__ = newYear;
        }
        this.getYear = function(){
            return __year__;
        }

        this.setAmount(amount);
        this.setMonth(month);
        this.setYear(year);
    }

    displayInfo(){
        return '"amount" : ' +this.getAmount()+', "year" : ' +this.getYear()+', "month" : "' + this.getMonth()+'" ';
    }
}

module.exports = BudgetItem;