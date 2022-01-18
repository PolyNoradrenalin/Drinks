import {DrinkOrder} from "./model/DrinkOrder";

const greenColor = "\x1b[32m";
const resetColor = "\x1b[0m";

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

    //Create a DrinkOrder
    let drinkOrder = new DrinkOrder();

    //TODO: choose cup size, drink, resources, cup or no cup

    /******************************DRINK********************************/
    let userDrink = askQuestion("Choose a drink", getOptions());


    /******************************CUP SIZE********************************/
    let userCupSize = askQuestion("Choose a cup size", getOptions());

    /******************************OWN CUP********************************/
    let userOwnCup = yesNoQuestion("Do you want to use your own cup? a reduction will be given if you do");

    /******************************RESOURCES********************************/
    let userSugar = askQuestion("How much sugar?", ["0", "1", "2", "3", "4", "5"]);

}


function askQuestion(question: string, options: string[]): number {
    console.log(greenColor + question);

    for(let i = 1; i <= options.length; i++) {
        console.log(i + "- " + options[i]);
    }

    console.log(resetColor);

    let answer = readLineSync.question();

    if(answer >= 1 && answer <= options.length) {
        return answer;
    } else {
        throw new Error("Invalid option");
    }
}

function yesNoQuestion(question: string): boolean {
    console.log(greenColor + question + resetColor);

    let answer = readLineSync.question();

    if(answer === "y") {
        return true;
    } else if(answer === "n") {
        return false;
    } else {
        throw new Error("Invalid option");
    }
}

function getOptions(arg: DAO): String[] {
    let options: String[] = [];
    for(let i = 0; i < arg.length; i++) {
        options.push(arg.getAll().name);
    }
    return options;
}