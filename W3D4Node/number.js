const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
let sum = 0;
function getNumber() {
    readline.question('enter a number to add and enter stop to stop  ', (n) => {
        debugger;
        if (n === "stop") {
            console.log("the sum is " + sum);
            readline.close();
        }
        else {
            let num = parseInt(n);
            if (isNaN(n)) {
                num = 0;
            }
            sum = sum + num;
            getNumber();
        }
    });
}
getNumber();