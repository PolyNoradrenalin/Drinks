import {Drink} from "../src/entity/Drink";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {DrinkOrder} from "../src/entity/DrinkOrder";
import {describe} from "mocha";
import {Cup} from "../src/entity/Cup";

describe("DrinkOrder", () => {
    let drinkOrder: DrinkOrder;

    describe("isValid", () => {

        beforeEach(() => {
            drinkOrder = new DrinkOrder();
            drinkOrder.drink = new Drink();
            drinkOrder.cup = new Cup();
            drinkOrder.drink.price = 1;
            drinkOrder.cup.price = 1;
            drinkOrder.price = 2;
            drinkOrder.bought_cup = true;
            drinkOrder.sugarAmount = 1;
        });

        it("should return true if drink order is valid", () => {
            assert.equal(drinkOrder.isValid(), true);
        });

        it("Should throw an error if drink is not set", () => {
            drinkOrder.drink = null;
            assert.equal(drinkOrder.isValid(), false);
        });

        it("Should throw an error if cup is not set", () => {
            drinkOrder.cup = null;
            assert.equal(drinkOrder.isValid(), false);
        });


        it("Should throw an error if sugar amount is not valid (inferior to 0)", () => {
            drinkOrder.sugarAmount = -1;
            assert.equal(drinkOrder.isValid(), false);
        });

        it("Should throw an error if sugar amount is not valid (over 5)", () => {
            drinkOrder.sugarAmount = 6;
            assert.equal(drinkOrder.isValid(), false);
        });

        it("Should throw an error if drink is not valid", () => {
            drinkOrder.drink.price = -1;
            assert.equal(drinkOrder.isValid(), false);
        });

        it("Should throw an error if cup is not valid", () => {
            drinkOrder.cup.price = -1;
            assert.equal(drinkOrder.isValid(), false);
        });

        it("Should throw an error if price is not valid", () => {
            drinkOrder.price = -1;
            assert.equal(drinkOrder.isValid(), false);
        });

    });

});
