import {Drink} from "../src/entity/Drink";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");


import { OrderBuilder } from "../src/controller/OrderBuilder";
import {Cup} from "../src/entity/Cup";

let consoleStub;

describe("setDrink", function () {
    beforeEach(function () {
        this.orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the drink", function () {
        let drink = new Drink();
        drink.name = "Test";
        this.orderBuilder.setDrink(drink);
        assert.equal(this.orderBuilder.drink, drink);
    });

    it("should throw an error if the drink is null", function () {
        let drink = null;
        assert.throws(() => {
            this.orderBuilder.setDrink(drink);
        });
    });

    it("should throw an error if the drink is undefined", function () {
        let drink;
        assert.throws(() => {
            this.orderBuilder.setDrink(drink);
        });
    });

});


describe("setCup", function () {
    beforeEach(function () {
        this.orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the cup", function () {
        let cup = new Cup();
        this.orderBuilder.setCup(cup);
        assert.equal(this.orderBuilder.cup, cup);
    });

    it("should throw an error if the cup is null", function () {
        let cup = null;
        assert.throws(() => {
            this.orderBuilder.setCup(cup);
        });
    });

    it("should throw an error if the cup is undefined", function () {
        let cup;
        assert.throws(() => {
            this.orderBuilder.setCup(cup);
        });
    });

});


describe("setCupChoice", function () {
    beforeEach(function () {
        this.orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the cup choice boolean", function () {
        let cupChoice = true;
        this.orderBuilder.setCupChoice(cupChoice);
        assert.equal(this.orderBuilder.bought_cup, cupChoice);

        cupChoice = false;
        this.orderBuilder.setCupChoice(cupChoice);
        assert.equal(this.orderBuilder.bought_cup, cupChoice);
    });

    it("should throw an error if the choice is null", function () {
        let cupChoice = null;
        assert.throws(() => {
            this.orderBuilder.setCupChoice(cupChoice);
        });
    });

    it("should throw an error if the choice is undefined", function () {
        let cupChoice;
        assert.throws(() => {
            this.orderBuilder.setCupChoice(cupChoice);
        });
    });

});