// TODO: Make this a class maybe?

const greenColor = "\x1b[32m";
const resetColor = "\x1b[0m";

const randomStrings = [
    "m3hxdpxn1e",
    "oqo55dxjkt",
    "z9sqy90gla",
    "ojicxncb38",
    "qht9frrax7",
    "qtqaliwtuf",
    "j173f8322d",
    "8eg7innci6",
    "or9h90dg64",
    "qr82hovb0c",
    "5w230nsfo7",
    "tqxbir3pxq",
    "uf8l1u53hb",
    "ievumiyzqj",
    "04589vbx5s",
    "924ctyfqrv",
    "s8546qr3m9",
    "8d8zsrd31f",
    "fzismfm2on",
    "9eb8cg2ek2",
    "5evzzj8c6y",
    "7l5czj0fk0",
    "w04vxk1zdf",
    "2z076cbb7f",
    "bu76tp9bfp",
    "11nl2hgmto",
    "8lii2q0a1o",
    "2vd6bje8dr",
    "91qvctfino",
    "ms4f4ynsae",
    "2qrq08fdt1",
    "7k00j6ase0",
    "qi30jswm14",
    "crqrqj3k2b",
    "yhgd0mdwg3",
    "8k10rurbe2",
    "6ug8d6ilxk",
    "4vgse595v1",
    "xsmzq2h753",
    "bjrhh82n8d",
    "39kzvvozrc",
    "sm2psnorxj",
    "r2cks46zqo",
    "i8m24p50mo",
    "96421uo2ke",
    "15ly4lp12g",
    "1kcxijdgjd",
    "48e165osq5",
    "txzxhxrp8g",
    "7siiit6oj2"
];

let readLineSync = require('readline-sync');

function main(){
    let userRes = "";
    while (userRes !== "exit") {
        console.log(greenColor + "help - help menu");
        console.log("start - start order");
        console.log("exit - exit program" + resetColor);
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
}



function help() {
    console.log("Hi, I'm an help menu")
}

function start() {
    console.log("Starting an order..");

    //Create a DrinkOrder
    //let drinkOrder = new DrinkOrder();

    //TODO: implement with the model, creating the drink order

    /******************************DRINK********************************/
    let userDrink = askQuestion("Choose a drink", getOptions(4));
    console.log("You chose " + userDrink);


    /******************************CUP SIZE********************************/
    let userCupSize = askQuestion("Choose a cup size", getOptions(2));
    console.log("You chose " + userCupSize);

    /******************************OWN CUP********************************/
    let userOwnCup = yesNoQuestion("Do you want to use your own cup?(y/n) a reduction will be given if you do");
    if (userOwnCup) {
        console.log("You chose to use your own cup");
    } else {
        console.log("You chose to use a cup from the machine");
    }

    /******************************RESOURCES********************************/
    let userSugar = rangeQuestion("How much sugar do you want?[0-5]", 0,5);
    console.log("You chose " + userSugar + " sugar");



    console.log("You will pay " + greenColor + "XX" + "€" + resetColor + " for your order");
    console.log("Your order is ready to pick up ! We hope to see you again soon!");

}


/**
 * Ask a question to the user and return the answer
 * @param question the question to ask
 * @param options the options to choose from
 * @returns {string} the answer chosen from the options
 * @throws {Error} if the answer is not in the options or if there's no options/answers
 */
export function askQuestion(question: string, options: string[]): string {
    if(options == null || options.length == 0){
        throw new Error("No options");
    }

    console.log(greenColor + question);

    for(let i = 0; i < options.length; i++) {
        console.log(i+1 + "- " + options[i]);
    }

    console.log(resetColor);

    let answer = readLineSync.question();

    if(answer >= 1 && answer <= options.length) {
        return options[answer-1];
    } else {
        throw new Error("Invalid option");
    }
}


/**
 * Ask a yes/no question to the user
 * @param question the question to ask
 * @returns {boolean} true if the answer is yes, false if the answer is no
 * @throws Error if the answer is not yes or no (y or n)
 */
export function yesNoQuestion(question: string): boolean {
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


/**
 * Ask a question with a range of possible answers
 * @param question the question to ask
 * @param min the minimum value of the accepted range
 * @param max the maximum value of the accepted range
 * @returns the answer the user gave, as a number
 */
export function rangeQuestion(question: string, min: number, max: number): number {
    console.log(greenColor + question + resetColor);

    let answer = readLineSync.question();

    if(answer >= min && answer <= max) {
        return answer;
    } else {
        throw new Error("Invalid option");
    }
}

/*function getOptions(arg: DAO): String[] {
    let options: String[] = [];
    for(let i = 0; i < arg.length; i++) {
        options.push(arg.getAll().name);
    }
    return options;
}*/

/**
 * Returns an array of strings with the names of the options as such:
 * i - option i
 * @param nb the number of options to get
 * @returns an array of strings containing the names of the options
 */
function getOptions(nb : number): string[] {
    if(nb < 0) {
        throw new Error("Invalid number of options");
    }
    let options: string[] = [];
    for(let i = 0; i < nb; i++) {
        options.push(randomStrings[i]);
    }
    return options;
}