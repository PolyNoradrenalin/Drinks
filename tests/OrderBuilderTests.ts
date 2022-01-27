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
    let orderBuilder: OrderBuilder;
    beforeEach(function () {
        orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the drink", function () {
        let drink = new Drink();
        drink.name = "Test";
        orderBuilder.setDrink(drink);
        assert.equal(orderBuilder.getOrder().drink, drink);
    });

    it("should throw an error if the drink is null", function () {
        let drink = null;
        assert.throws(() => {
            orderBuilder.setDrink(drink);
        });
    });

    it("should throw an error if the drink is undefined", function () {
        let drink;
        assert.throws(() => {
            orderBuilder.setDrink(drink);
        });
    });

});


describe("setCup", function () {
    let orderBuilder: OrderBuilder;

    beforeEach(function () {
        orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the cup", function () {
        let cup = new Cup();
        orderBuilder.setCup(cup);
        assert.equal(orderBuilder.getOrder().cup, cup);
    });

    it("should throw an error if the cup is null", function () {
        let cup = null;
        assert.throws(() => {
            orderBuilder.setCup(cup);
        });
    });

    it("should throw an error if the cup is undefined", function () {
        let cup;
        assert.throws(() => {
            orderBuilder.setCup(cup);
        });
    });

});


describe("setCupChoice", function () {
    let orderBuilder: OrderBuilder;

    beforeEach(function () {
        orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the cup choice boolean", function () {
        let cupChoice = true;
        orderBuilder.setCupChoice(cupChoice);
        assert.equal(orderBuilder.getOrder().bought_cup, cupChoice);

        cupChoice = false;
        orderBuilder.setCupChoice(cupChoice);
        assert.equal(orderBuilder.getOrder().bought_cup, cupChoice);
    });

    it("should throw an error if the choice is null", function () {
        let cupChoice = null;
        assert.throws(() => {
            orderBuilder.setCupChoice(cupChoice);
        });
    });

    it("should throw an error if the choice is undefined", function () {
        let cupChoice;
        assert.throws(() => {
            orderBuilder.setCupChoice(cupChoice);
        });
    });

});


describe("setSugarChoice", function () {
    let orderBuilder: OrderBuilder;

    beforeEach(function () {
        this.orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should set the sugar amount", function () {
        let sugar = 2;
        this.orderBuilder.setSugarChoice(sugar);
        assert.equal(this.orderBuilder.getOrder().sugarAmount, sugar);
    });

    it("should throw an error if the amount is above 5", function () {
        let sugar = 6;
        assert.throws(() => {
            this.orderBuilder.setSugarChoice(sugar);
        });
    });

    it("should throw an error if the amount is below 0", function () {
        let sugar = -1;
        assert.throws(() => {
            this.orderBuilder.setSugarChoice(sugar);
        });
    });

    it("should throw an error if the cup is null", function () {
        let sugar = null;
        assert.throws(() => {
            this.orderBuilder.setSugarChoice(sugar);
        });
    });

    it("should throw an error if the cup is undefined", function () {
        let sugar;
        assert.throws(() => {
            this.orderBuilder.setSugarChoice(sugar);
        });
    });

});


describe("getOrder", function () {
    let orderBuilder: OrderBuilder;

    beforeEach(function () {
        orderBuilder = new OrderBuilder();
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        consoleStub.restore();
    });

    it("should return the order", function () {
        //NOT implemented yet
        throw new Error("Not implemented yet");
    });

});

