let readLineSync = require('readline-sync');

const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {yesNoQuestion} from "../app/menu";

// https://gitlab.com/otmaneguenouni/testing-demo/-/blob/master/test/unit.js
//+ nyc for coverage

//var sandbox = sinon.createSandbox();

import {returnTwo} from "./example";

function returnFalse(callback: any) {
    return false;
}
let test;

describe("Yes/No Question function tests", function () {

    beforeEach(function () {
        //stub readline.question
        sinon.stub(readLineSync, "question");
        //prevent console.log
        test = sinon.stub(console, "log");
    });

    afterEach(function () {
        //restore readline.question
        readLineSync.question.restore();
        test.restore();
    });

    it("Should return true when y is written", function () {
        //stub readline.question to return "yes"
        readLineSync.question.returns("y");
        //call yesNoQuestion
        let result = yesNoQuestion("Do you want to continue?");
        //assert that result is true
        assert.equal(result, true);
    });

    it("Should return false when n is written", function () {
        //stub readline.question to return "yes"
        readLineSync.question.returns("n");
        //call yesNoQuestion
        let result = yesNoQuestion("Do you want to continue?");
        //assert that result is true
        assert.equal(result, false);
    });

    it("Should throw an error when a wrong command is written", function () {
        //stub readline.question to return "yes"
        readLineSync.question.returns("Hello");
        //call yesNoQuestion and assert that an error is thrown
        assert.throws( ()=>yesNoQuestion("Do you want to continue?"), Error);
    });

})




describe("Check return 2", function () {
    it("Should return 2", function () {
        let test = 2;

        assert.equal(returnTwo(), 2);
    })
})

describe("Unit tests try", function () {
    beforeEach(function () {
        //stubbing
        this.stub = sinon.stub();
        //mocking
        this.mock = sinon.mock();
    });

    afterEach(function () {
        //restore
        sinon.restore();
    });

    it("should do something", function () {
        var callback = sinon.fake.returns(true);
        var proxy = returnFalse(callback);
        var test = !true;
        assert.equal(proxy, test);
    });
});


