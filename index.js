BudgetItem = require("./BudgetItem");
Expense = require("./Expense");
Income = require("./Income");
BudgetAnalysis = require("./BudgetAnalysis");
Objects = require("./Objects.json");

Items = new BudgetAnalysis();
console.log(Items.add(Objects))
for (let s of Items.itemByMonth(2018,  "Jan"))
    console.log(s.displayInfo());

console.log(Items.revenueByMonth( 2018,  "Jan"))

month = undefined
year = 2018

let fs = require('fs');
let result = "[\n";
for (let s of Items.itemByYear(year, month))
    result += "{"+ s.displayInfo()+', "revenue" : '+Items.revenueByYear(year, month) +', "intervalMonth" : "'+ month+ '", "intervalYear" : '+year+"},\n";
result = result.slice(0, -2);
result += "\n]";
fs.writeFile('AnalysisResult.json', result, ()=>{console.log("writing success")})

