BudgetItem = require("./BudgetItem");
Expense = require("./Expense");
Income = require("./Income");
BudgetAnalysis = require("./BudgetAnalysis");
Objects = require("./Objects.json");

Items = new BudgetAnalysis();
console.log(Items.add(Objects))
for (let s of Items.itemByMonth( "Jan", 2018))
    console.log(s.displayInfo());

console.log(Items.revenueByMonth("Jan", 2018))

month = "Jan"
year = 2018

let fs = require('fs');
let result = "[\n";
for (let s of Items.itemByMonth(month, year))
    result += "{"+ s.displayInfo()+', "revenue" : '+Items.revenueByMonth(month, year) +', "intervalMonth" : "'+ month+ '", "intervalYear" : '+year+"},\n";
result = result.slice(0, -2);
result += "\n]";
fs.writeFile('MonthAnalysis.json', result, ()=>{console.log("writing success")})

year = 2018

result = "[\n";
for (let s of Items.itemByYear(year))
    result += "{"+ s.displayInfo()+', "revenue" : '+Items.revenueByYear(year) +', "intervalMonth" : "'+ undefined+ '", "intervalYear" : '+year+"},\n";
result = result.slice(0, -2);
result += "\n]";
fs.writeFile('YearAnalysis.json', result, ()=>{console.log("writing success")})