import {Drink} from "../src/entity/Drink";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {OrderController} from "../src/controller/OrderController";
import {TypeORMService} from "../src/service/TypeORMService";
import {IService} from "../src/service/IService";
import {ConsoleView} from "../src/view/view";
import {SinonMock, SinonStubbedInstance} from "sinon";
import {describe} from "mocha";
import {Cup} from "../src/entity/Cup";
import {Resource} from "../src/entity/Resource";
import {DrinkOrder} from "../src/entity/DrinkOrder";

describe("OrderController", () => {
    let controller : OrderController;
    let service : SinonStubbedInstance<IService>;
    let view : ConsoleView;
    let viewMock : SinonMock;
    let consoleStub

    beforeEach(function () {
        view = new ConsoleView();
        viewMock = sinon.mock(view);
        service = sinon.createStubInstance(TypeORMService);
        controller = new OrderController(service, view);
        consoleStub = sinon.stub(console, "log");
    });

    afterEach(function () {
        sinon.restore();
    });

    describe("getDrinkSelection", () => {
        it("Should return the correct drink when a correct number is entered given a filled list", () => {
            let drink = new Drink();
            drink.id = 0;
            drink.name = "Test drink";
            drink.price = 10;
            drink.content = "That drink TESTS good.";

            let drink1 = new Drink();
            drink1.id = 0;
            drink1.name = "Another console drink";
            drink1.price = 20;
            drink1.content = "This is TESTY.";

            viewMock.expects("choiceQuestion").once().returns(drink);

            let choice = controller.getDrinkSelection([drink, drink1]);

            assert.equal(choice, drink);
            viewMock.verify();
        });

        it("Should throw an exception when given an empty list", () => {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getDrinkSelection([]) });

            viewMock.verify();
        });

        it("Should throw an exception when given an uninitialized list", () => {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getDrinkSelection(null) });

            viewMock.verify();
        });
    });

    describe("getSizeSelection", function () {
        it("Should return the correct cup when a correct number is entered given a filled list", () => {
            let cup1 = new Cup();
            cup1.id = 0;
            cup1.stock = 10;
            cup1.price = 2;

            let cup2 = new Cup();
            cup2.id = 1;
            cup2.stock = 5;
            cup2.price = 3;

            viewMock.expects("choiceQuestion").once().returns(cup2);

            let choice = controller.getSizeSelection([cup1, cup2]);

            assert.equal(choice, cup2);
            viewMock.verify();
        });


        it("Should throw an exception when no cup is available", () => {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSizeSelection([]); })

            viewMock.verify();
        });

        it("Should throw an exception when cup list is uninitialized", () => {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSizeSelection(null); })

            viewMock.verify();
        });
    });

    describe("getSugarSelection", () => {
        it("Should return the correct sugar quantity when a correct number is entered given a filled list", () => {
            let sugar = new Resource();
            sugar.id = 0;
            sugar.name_resource = "Sugar";
            sugar.stock_resource = 30;

            viewMock.expects("choiceQuestion").once().returns(5);
            let choice = controller.getSugarSelection(sugar);

            assert.equal(choice, 5);
            viewMock.verify();
        });

        it("Should throw an exception when the given resource is not sugar", () => {
            let water = new Resource();
            water.id = 0;
            water.name_resource = "Water";
            water.stock_resource = 30;

            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSugarSelection(water); });

            viewMock.verify();
        });

        it("Should throw an exception when the given resource in uninitialized", () => {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSugarSelection(null); });

            viewMock.verify();
        });

        it("Should return 0 when no sugar available", () => {
            let sugar = new Resource();
            sugar.id = 0;
            sugar.name_resource = "Sugar";
            sugar.stock_resource = 0;

            viewMock.expects("displayMessage").once();

            let choice = controller.getSugarSelection(sugar);

            assert.equal(choice, 0);
            viewMock.verify();
        });
    });


    describe("getCupChoice", function () {
        it("Should return true when the user enters 'y' and there is enough cups", function () {
            viewMock.expects("yesNoQuestion").once().returns(true);
            let cup = new Cup();
            cup.stock = 10;
            assert.equal(controller.getCupChoice(cup), true);
        });

        it("Should return false when the user enters 'n' and there is enough cups", function () {
            viewMock.expects("yesNoQuestion").once().returns(false);
            let cup = new Cup();
            cup.stock = 10;
            assert.equal(controller.getCupChoice(cup), false);
        });

        it("Should return false when there isn't enough cups", function () {
            viewMock.expects("yesNoQuestion").once().returns(true);
            let cup = new Cup();
            cup.stock = 0;
            assert.equal(controller.getCupChoice(cup), false);
        });

        it("Should throw an exception if cup is null", function () {
            assert.throws(() => { controller.getCupChoice(null) });
        });

        it("Should throw an exception if the answer is invalid", function () {
            viewMock.expects("yesNoQuestion").once().throws(new Error("Invalid answer"));
            let cup = new Cup();
            cup.stock = 10;
            assert.throws(() => { controller.getCupChoice(cup) });
        });

    })


    describe("getConfirmation", function () {
        let order: DrinkOrder;
        beforeEach(function () {
            order = new DrinkOrder();
            order.drink = new Drink();
            order.drink.name = "Test Drink";
            order.drink.price = 2;
            order.cup = new Cup();
            order.cup.price = 1;
            order.sugarAmount = 0;
        });

        afterEach(function () {
            sinon.restore();
        });

        it("Should return true when the user enters 'y'", function () {
            viewMock.expects("yesNoQuestion").once().returns(true);
            assert.equal(controller.getConfirmation(order), true);
        });

        it("Should return false when the user enters 'n'", function () {
            viewMock.expects("yesNoQuestion").once().returns(false);
            assert.equal(controller.getConfirmation(order), false);
        });

        it("Should throw an exception if the user enters an invalid input", function () {
            viewMock.expects("yesNoQuestion").once().throws(new Error("Invalid answer"));
            assert.throws(() => { controller.getConfirmation(order) });
        });

        it("Should throw an exception if order is null", function () {
            assert.throws(() => { controller.getConfirmation(null) });
        });
    });

})




