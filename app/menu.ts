//import * as readline from 'readline';
/*
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Option 1")
console.log("Option 2")
console.log("Option 3")
rl.question("Pick an option", (userChoice) => {
    switch(userChoice) {
        case "help": {
            console.log("Hi, I'm a help menu")
            //statements;
            break;
        }
        case "start": {
            console.log("Starting an order..")
            //statements;
            break;
        }
        case "exit": {
            console.log("Exiting the program")
            rl.close();
            //statements;
            break;
        }
        default: {
            console.log("Invalid option");
            //statements;
            break;
        }

    }
});

*/

let readLineSync = require('readline-sync');

let userRes = "";
while (userRes !== "exit") {
    console.log("\x1b[32mhelp - help menu");
    console.log("start - start order");
    console.log("exit - exit program\x1b[0m");
    userRes = readLineSync.question("Pick an option\n");
    switch (userRes) {
        case "help": {
            help();
            break;
        }
        case "start": {
            start()
            break;
        }
        case "exit": {
            console.log("Exiting the program")
            break;
        }
        default: {
            console.log("Invalid option");
            break;
        }

    }
}

function help() {
    console.log("Hi, I'm a help menu")
}

function start() {
    console.log("Starting an order..");
    //TODO: choose cup size, drink, resources, cup or no cup
}