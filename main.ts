#! / user/bin/env node 

import inquirer from "inquirer"

const currency: any = {
  USD: 1,//Base curenncy
  EUR: 0.84,
  GBP: 0.73,
  JPY: 126.59,
  AUD: 1.35,
  CAD: 1.3,
  PKR: 0.0028,
};

let user_anwer= await inquirer.prompt(
  [
      
      {

        name:    "from",
       message: "enter your currency",  
       type:     "list"
       ,choices:  ["USD","EUR","GBP","JPY","AUD","CAD","PKR"]

      },
      {

        name:    "to",
       message: "enter to your currency",  
       type:     "list"
       ,choices:  ["USD","EUR","GBP","JPY","AUD","CAD","PKR"]
       
      },
      {
        
        name: "amount"
        ,message:"Enter amount  of  money  you want  convert",
         type: "number"
      }

 ]
    
)

let  fromResult = currency[user_anwer.from]
let  toRate =   currency[user_anwer.to]
let amount = user_anwer.amount
let baseAmount = amount / fromResult // USD base curenncy // 4 
let convertAmount = baseAmount * toRate
console.log(convertAmount);
// console.log(fromResult);
// console.log(toRate);
// console.log(amount);
