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

describe("OrderController", () => {
    let controller : OrderController;
    let service : SinonStubbedInstance<IService>;
    let view : ConsoleView;
    let viewMock : SinonMock;

    beforeEach(function () {
        view = new ConsoleView();
        viewMock = sinon.mock(view);
        service = sinon.createStubInstance(TypeORMService);
        controller = new OrderController(service, view);
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


    describe("getCupChoice", function () {
        let view;
        let controller;
        let consoleStub;
        beforeEach(function () {
            view = sinon.createStubInstance(ConsoleView);
            controller = new OrderController(null, view);
            consoleStub = sinon.stub(console, "log");
        });

        afterEach(function () {
            sinon.restore();
        });

        it("Should return true when the user enters 'y' and there is enough cups", function () {

            view.yesNoQuestion.returns(true);
            let cup = new Cup();
            cup.stock = 10;
            assert.equal(controller.getCupChoice(cup), true);
        });

        it("Should return false when the user enters 'n' and there is enough cups", function () {
            view.yesNoQuestion.returns(false);
            let cup = new Cup();
            cup.stock = 10;
            assert.equal(controller.getCupChoice(cup), false);
        });

        it("Should return false when there isn't enough cups", function () {
            view.yesNoQuestion.returns(true);
            let cup = new Cup();
            cup.stock = 0;
            assert.equal(controller.getCupChoice(cup), false);
        });

        it("Should throw an exception if cup is null", function () {
            assert.throws(() => { controller.getCupChoice(null) });
        });

    })


})




