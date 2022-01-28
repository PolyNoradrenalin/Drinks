import {Drink} from "../src/entity/Drink";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");


import { OrderBuilder } from "../src/controller/OrderBuilder";
import {Cup} from "../src/entity/Cup";




describe("OrderBuilder", function (){
    let consoleStub;
    let orderBuilder: OrderBuilder;
    beforeEach(function (){
        consoleStub = sinon.stub(console, "log");
        orderBuilder = new OrderBuilder();
    });

    afterEach(function (){
        consoleStub.restore();
    });

    describe("setDrink", function () {

        it("Should set the drink", function () {
            let drink = new Drink();
            drink.name = "Test";
            orderBuilder.drink = drink;
            assert.equal(orderBuilder.getOrder().drink, drink);
        });

        it("Should throw an error if the drink is null", function () {
            let drink = null;
            assert.throws(() => {
                orderBuilder.drink = drink;
            });
        });

        it("Should throw an error if the drink is undefined", function () {
            let drink;
            assert.throws(() => {
                orderBuilder.drink = drink;
            });
        });

    });


    describe("setCup", function () {

        it("Should set the cup", function () {
            let cup = new Cup();
            orderBuilder.cup = cup;
            assert.equal(orderBuilder.getOrder().cup, cup);
        });

        it("Should throw an error if the cup is null", function () {
            let cup = null;
            assert.throws(() => {
                orderBuilder.cup = cup;
            });
        });

        it("Should throw an error if the cup is undefined", function () {
            let cup;
            assert.throws(() => {
                orderBuilder.cup = cup;
            });
        });

    });


    describe("setCupChoice", function () {

        it("Should set the cup choice boolean", function () {
            let cupChoice = true;
            orderBuilder.setCupChoice(cupChoice);
            assert.equal(orderBuilder.getOrder().bought_cup, cupChoice);

            cupChoice = false;
            orderBuilder.setCupChoice(cupChoice);
            assert.equal(orderBuilder.getOrder().bought_cup, cupChoice);
        });

        it("Should throw an error if the choice is null", function () {
            let cupChoice = null;
            assert.throws(() => {
                orderBuilder.setCupChoice(cupChoice);
            });
        });

        it("Should throw an error if the choice is undefined", function () {
            let cupChoice;
            assert.throws(() => {
                orderBuilder.setCupChoice(cupChoice);
            });
        });

    });


    describe("setSugarChoice", function () {

        it("Should set the sugar amount", function () {
            let sugar = 2;
            orderBuilder.setSugarChoice(sugar);
            assert.equal(orderBuilder.getOrder().sugarAmount, sugar);
        });

        it("Should throw an error if the amount is above 5", function () {
            let sugar = 6;
            assert.throws(() => {
                orderBuilder.setSugarChoice(sugar);
            });
        });

        it("Should throw an error if the amount is below 0", function () {
            let sugar = -1;
            assert.throws(() => {
                orderBuilder.setSugarChoice(sugar);
            });
        });

        it("Should throw an error if the cup is null", function () {
            let sugar = null;
            assert.throws(() => {
                orderBuilder.setSugarChoice(sugar);
            });
        });

        it("Should throw an error if the cup is undefined", function () {
            let sugar;
            assert.throws(() => {
                orderBuilder.setSugarChoice(sugar);
            });
        });

    });


    describe("getOrder", function () {
        let drink = new Drink();
        drink.name = "Test";
        let cup = new Cup();
        let cupChoice = true;
        let sugar = 2;

        it("Should return the order", function () {
            orderBuilder.drink = drink;
            orderBuilder.cup = cup;
            orderBuilder.setCupChoice(cupChoice);
            orderBuilder.setSugarChoice(sugar);

            let order = orderBuilder.getOrder();

            assert.notEqual(order, null);
            assert.equal(order.cup, cup);
            assert.equal(order.bought_cup, cupChoice);
            assert.equal(order.drink, drink);
            assert.equal(order.sugarAmount, sugar);
        });

        it("Should return two different orders when getting the result two times", function () {
            let order1 = orderBuilder.getOrder();
            let order2 = orderBuilder.getOrder();

            assert.ok(order1 !== order2);
        });
    });
});

