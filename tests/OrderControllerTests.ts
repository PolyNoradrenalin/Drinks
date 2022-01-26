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
import {SinonStub} from "sinon";

describe("getDrinkSelection", function () {
    let controller : OrderController;
    let service : IService;
    let choiceQuestionStub : SinonStub;
    let view : ConsoleView;

    beforeEach(function () {
        view = new ConsoleView();
        service = sinon.createStubInstance(TypeORMService);
        choiceQuestionStub = sinon.stub(view, "choiceQuestion");
        controller = new OrderController(service);
    });

    afterEach(function () {
        choiceQuestionStub.restore();
    });

    it("Should return the correct drink when a correct number is entered given a filled list", function () {
        let drink = new Drink();
        drink.id = 0;
        drink.name = "Test drink";
        drink.price = 10;
        drink.content = "That drink TESTS good.";

        let drink1 = new Drink();
        drink.id = 0;
        drink.name = "Another console drink";
        drink.price = 20;
        drink.content = "This is TESTY.";

        choiceQuestionStub.returns(drink);

        assert.equal(controller.getDrinkSelection([drink, drink1]), drink);
    });

    it("Should throw an exception when given an empty list", function () {
        assert.throws(() => { controller.getDrinkSelection([]) });
    });

    it("Should throw an exception when given an uninitialized list", function () {
        assert.throws(() => { controller.getDrinkSelection(null) });
    });
});
