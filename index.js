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
let result = "[";
for (let s of Items.itemByMonth( "Jan", 2018))
    result += "{"+ s.displayInfo()+"},\n";
result += '{"revenue" : '+Items.revenueByMonth("Jan", 2018) +', "interval" : "'+ month+ '", "year" : '+year+"}]";
fs.writeFile('result.json', result, ()=>{console.log("writing success")})
