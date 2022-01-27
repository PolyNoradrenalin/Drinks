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

describe("getDrinkSelection", function () {
    const sandbox = sinon.createSandbox();

    let controller : OrderController;
    let mockController : SinonMock;
    let service : SinonStubbedInstance<IService>;
    let view : SinonStubbedInstance<ConsoleView>;

    beforeEach(function () {
        view = sandbox.createStubInstance(ConsoleView);
        service = sandbox.createStubInstance(TypeORMService);
        controller = new OrderController(service, view);
        mockController = sandbox.mock(controller);
    });

    afterEach(function () {
        sandbox.restore();
    });

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

        view.choiceQuestion.returns(drink);

        assert.equal(controller.getDrinkSelection([drink, drink1]), drink);

        mockController.verify();
    });

    it("Should throw an exception when given an empty list", function () {
        assert.throws(() => { controller.getDrinkSelection([]) });
    });

    it("Should throw an exception when given an uninitialized list", function () {

        assert.throws(() => { controller.getDrinkSelection(null) });
    });
});
