import {Drink} from "../src/entity/Drink";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");


import { OrderBuilder } from "../src/controller/OrderBuilder";
import {Cup} from "../src/entity/Cup";
import {stub} from "sinon";

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
            drink.price = 0.5;
            orderBuilder.setDrink(drink);
            assert.equal(orderBuilder.drink, drink);
        });

        it("Should throw an error if the drink is null", function () {
            let drink = null;
            assert.throws(() => {
                orderBuilder.setDrink(drink);
            });
        });

        it("Should throw an error if the drink is undefined", function () {
            let drink;
            assert.throws(() => {
                orderBuilder.setDrink(drink);
            });
        });

    });


    describe("setCup", function () {

        it("Should set the cup", function () {
            let cup = new Cup();
            cup.price = 0.5;
            orderBuilder.setCup(cup);
            assert.equal(orderBuilder.cup, cup);
        });

        it("Should throw an error if the cup is null", function () {
            let cup = null;
            assert.throws(() => {
                orderBuilder.setCup(cup);
            });
        });

        it("Should throw an error if the cup is undefined", function () {
            let cup;
            assert.throws(() => {
                orderBuilder.setCup(cup);
            });
        });

    });


    describe("setCupChoice", function () {

        it("Should set the cup choice boolean", function () {
            let cupChoice = true;
            orderBuilder.setCupChoice(cupChoice);
            assert.equal(orderBuilder.wantsCup, cupChoice);

            cupChoice = false;
            orderBuilder.setCupChoice(cupChoice);
            assert.equal(orderBuilder.wantsCup, cupChoice);
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
            assert.equal(orderBuilder.sugarAmount, sugar);
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
        drink.price = 0.5;
        let cup = new Cup();
        cup.price = 0.5;
        cup.size = 33;
        let cupChoice = true;
        let sugar = 2;

        it("Should return the order", function () {
            orderBuilder.setDrink(drink);
            orderBuilder.setCup(cup);
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
            orderBuilder.setDrink(drink);
            orderBuilder.setCup(cup);
            orderBuilder.setCupChoice(cupChoice);
            orderBuilder.setSugarChoice(sugar);

            let order1 = orderBuilder.getOrder();
            let order2 = orderBuilder.getOrder();

            assert.ok(order1 !== order2);
        });
    });
});

