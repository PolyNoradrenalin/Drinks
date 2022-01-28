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

describe("OrderController unit tests", () => {
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

    describe("getDrinkSelection", function () {
        it("Should return the correct drink when a correct number is entered given a filled list", function () {
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

        it("Should throw an exception when given an empty list", function () {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getDrinkSelection([]) });

            viewMock.verify();
        });

        it("Should throw an exception when given an uninitialized list", function () {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getDrinkSelection(null) });

            viewMock.verify();
        });
    });

    describe("getSizeSelection", function () {

    });
})