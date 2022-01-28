let readLineSync = require('readline-sync');

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {ConsoleView} from "../src/view/view";

// https://gitlab.com/otmaneguenouni/testing-demo/-/blob/master/test/unit.js
//+ nyc for coverage

//var sandbox = sinon.createSandbox();




describe("ConsoleView", function() {

    let view : ConsoleView;

    beforeEach(function () {
        sinon.stub(readLineSync, "question");
        view = new ConsoleView();
        //prevent console.log from printing
        sinon.stub(console, "log");
    });

    afterEach(function () {
        readLineSync.question.restore();
        sinon.restore();
    });

    describe("Yes/No Question function tests", function () {

        it("Should return true when y is written", function () {
            readLineSync.question.returns("y");
            let result = view.yesNoQuestion("Do you want to continue?");
            assert.equal(result, true);
        });

        it("Should return false when n is written", function () {
            readLineSync.question.returns("n");
            let result = view.yesNoQuestion("Do you want to continue?");
            assert.equal(result, false);
        });

        it("Should throw an error when a wrong command is written", function () {
            readLineSync.question.returns("Hello");
            assert.throws( () => view.yesNoQuestion("Do you want to continue?"), Error);
        });

    })

    describe("Range questions function tests", function () {

        it("Should return a number when a number is written", function () {
            readLineSync.question.returns("3");
            let result = view.rangeQuestion("How much X do you want (1-10)?", 1, 10);
            assert.equal(result, 3);
        });

        it("Should throw an error when a too big number is written", function () {
            readLineSync.question.returns("15");
            assert.throws( ()=> view.rangeQuestion("How much X do you want (1-10)?",1,10), Error);
        });

        it("Should throw an error when a too small number is written", function () {
            readLineSync.question.returns("0");
            assert.throws( ()=> view.rangeQuestion("How much X do you want (1-10)?",1,10), Error);
        });

        /*
        it("Should throw an error when a negative number is written", function () {
            readLineSync.question.returns("-5");
            //call rangeQuestion and assert that an error is thrown
            assert.throws( ()=>rangeQuestion("How much X do you want (1-10)?",1,10), Error);
        });
        */

    })

    describe("Ask Question function tests", function () {
        before(function () {
            this.randomstrings = new Map<string, number>([
                ["numero1", 1],
                ["numero2", 2],
                ["numero3", 3],
            ]);
        });

        it("Should return a number when a number is written", function () {
            readLineSync.question.returns("2");
            let result : number = view.choiceQuestion<number>("What do you want?", this.randomstrings);
            assert.equal(result, this.randomstrings.get("numero2"));
        });

        it("Should throw an error when null options are given", function () {
            assert.throws( ()=> view.choiceQuestion<number>("What do you want?", null), Error);
        });

        it("Should throw an error when no options are given", function () {
            readLineSync.question.returns("2");
            assert.throws( ()=> view.choiceQuestion<number>("What do you want?", new Map<string, number>()), Error);
        });

        it("Should throw an error when a wrong command is written", function () {
            readLineSync.question.returns("Hello");
            assert.throws(() => view.choiceQuestion<number>("What do you want?", this.randomstrings), Error);
        });

        it("Should throw an error when a too big number is written", function () {
            readLineSync.question.returns("6");
            assert.throws(() => view.choiceQuestion<number>("What do you want?", this.randomstrings), Error);
        });

        it("Should throw an error when a too small number is written", function () {
            readLineSync.question.returns("0");
            assert.throws(() => view.choiceQuestion("What do you want?", this.randomstrings), Error);
        });

    })


    describe("displayMessage function tests", function () {
        it("Should print the message", function () {
            view.displayMessage("Hello");
            sinon.assert.calledWith(console.log, "\x1b[32m"+"Hello"+"\x1b[0m");
        });

        it("Should throw an error if null is passed", function () {
            assert.throws(() => view.displayMessage(null), Error);
        });

        it("Should throw an error if the message is empty", function () {
            assert.throws(() => view.displayMessage(""), Error);
        });
    })
});