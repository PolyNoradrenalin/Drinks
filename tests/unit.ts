let readLineSync = require('readline-sync');

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {askQuestion, rangeQuestion, yesNoQuestion} from "../app/menu";

// https://gitlab.com/otmaneguenouni/testing-demo/-/blob/master/test/unit.js
//+ nyc for coverage

//var sandbox = sinon.createSandbox();

let test;

describe("Yes/No Question function tests", function () {

    beforeEach(function () {
        sinon.stub(readLineSync, "question");
        //prevent console.log from printing
        test = sinon.stub(console, "log");
    });

    afterEach(function () {
        readLineSync.question.restore();
        test.restore();
    });

    it("Should return true when y is written", function () {
        readLineSync.question.returns("y");
        let result = yesNoQuestion("Do you want to continue?");
        assert.equal(result, true);
    });

    it("Should return false when n is written", function () {
        readLineSync.question.returns("n");
        let result = yesNoQuestion("Do you want to continue?");
        assert.equal(result, false);
    });

    it("Should throw an error when a wrong command is written", function () {
        readLineSync.question.returns("Hello");
        assert.throws( ()=>yesNoQuestion("Do you want to continue?"), Error);
    });

})

describe("Range questions function tests", function () {

    beforeEach(function () {
        sinon.stub(readLineSync, "question");
        //prevent console.log from printing
        test = sinon.stub(console, "log");
    });

    afterEach(function () {
        readLineSync.question.restore();
        test.restore();
    });

    it("Should return a number when a number is written", function () {
        readLineSync.question.returns("3");
        let result = rangeQuestion("How much X do you want (1-10)?", 1, 10);
        assert.equal(result, 3);
    });

    it("Should throw an error when a too big number is written", function () {
        readLineSync.question.returns("15");
        assert.throws( ()=>rangeQuestion("How much X do you want (1-10)?",1,10), Error);
    });

    it("Should throw an error when a too small number is written", function () {
        readLineSync.question.returns("0");
        assert.throws( ()=>rangeQuestion("How much X do you want (1-10)?",1,10), Error);
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
        this.randomstrings = [
            "m3hxdpxn1e",
            "oqo55dxjkt",
            "z9sqy90gla",
            "ojicxncb38",
            "qht9frrax7"];
    });
    beforeEach(function () {
        sinon.stub(readLineSync, "question");
        //prevent console.log from printing
        test = sinon.stub(console, "log");
    });

    afterEach(function () {
        readLineSync.question.restore();
        test.restore();
    });

    it("Should return a number when a number is written", function () {
        readLineSync.question.returns("2");
        let result = askQuestion("What do you want?", this.randomstrings);
        assert.equal(result, this.randomstrings[1]);
    });

    it("Should throw an error when a wrong command is written", function () {
        readLineSync.question.returns("Hello");
        assert.throws( ()=>askQuestion("What do you want?", this.randomstrings), Error);
    });

    it("Should throw an error when a too big number is written", function () {
        readLineSync.question.returns("6");
        assert.throws( ()=>askQuestion("What do you want?", this.randomstrings), Error);
    });

    it("Should throw an error when a too small number is written", function () {
        readLineSync.question.returns("0");
        assert.throws( ()=>askQuestion("What do you want?", this.randomstrings), Error);
    });

})