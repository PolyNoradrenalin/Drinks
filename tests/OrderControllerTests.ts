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
import {SinonMock} from "sinon";
import {describe} from "mocha";
import {Cup} from "../src/entity/Cup";
import {Resource} from "../src/entity/Resource";
import {DrinkOrder} from "../src/entity/DrinkOrder";

describe("OrderController", function () {
    let controller : OrderController;
    let service : IService;
    let serviceMock : SinonMock;
    let view : ConsoleView;
    let viewMock : SinonMock;
    let consoleStub

    beforeEach(function () {
        view = new ConsoleView();
        viewMock = sinon.mock(view);
        service = new TypeORMService();
        serviceMock = sinon.mock(service);
        controller = new OrderController(service, view);
        consoleStub = sinon.stub(console, "log");
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
        it("Should return the correct cup when a correct number is entered given a filled list", function () {
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


        it("Should throw an exception when no cup is available", function () {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSizeSelection([]); })

            viewMock.verify();
        });

        it("Should throw an exception when cup list is uninitialized", function () {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSizeSelection(null); })

            viewMock.verify();
        });
    });

    describe("getSugarSelection", () => {
        it("Should return the correct sugar quantity when a correct number is entered given a filled list", function () {
            let sugar = new Resource();
            sugar.id = 0;
            sugar.name_resource = "Sugar";
            sugar.stock_resource = 30;

            viewMock.expects("choiceQuestion").once().returns(5);
            let choice = controller.getSugarSelection(sugar);

            assert.equal(choice, 5);
            viewMock.verify();
        });

        it("Should throw an exception when the given resource is not sugar", function () {
            let water = new Resource();
            water.id = 0;
            water.name_resource = "Water";
            water.stock_resource = 30;

            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSugarSelection(water); });

            viewMock.verify();
        });

        it("Should throw an exception when the given resource in uninitialized", function () {
            viewMock.expects("choiceQuestion").never();

            assert.throws(() => { controller.getSugarSelection(null); });

            viewMock.verify();
        });

        it("Should return 0 when no sugar available", function () {
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

        it("Should throw an exception if the order is invalid", function () {
            sinon.stub(order, "isValid").returns(false);
            assert.throws(() => { controller.getConfirmation(order) });
        });

        it("Should throw an exception if the user enters an invalid input", function () {
            viewMock.expects("yesNoQuestion").once().throws(new Error("Invalid answer"));
            assert.throws(() => { controller.getConfirmation(order) });
        });

        it("Should throw an exception if order is null", function () {
            assert.throws(() => { controller.getConfirmation(null) });
        });
    });

    describe("startOrder", function () {
        let drink = new Drink();
        drink.id = 0;
        drink.name = "Testy drink";
        drink.content = "This is a very testy drink";
        drink.price = 10;

        let drink1 = new Drink();
        drink1.id = 1;
        drink1.name = "Lilianx drink's";
        drink1.content = "Rehydrating !";
        drink1.price = 15;

        let cup35 = new Cup();
        cup35.id = 0;
        cup35.size = 35;
        cup35.stock = 10;

        let cup75 = new Cup();
        cup75.id = 0;
        cup75.size = 75;
        cup75.stock = 5;

        let sugar = new Resource();
        sugar.id = 0;
        sugar.stock_resource = 50;
        sugar.name_resource = "Sugar";

        let water = new Resource();
        water.id = 0;
        water.stock_resource = 800;
        water.name_resource = "Water";

        let mockController;

        beforeEach(function () {
            serviceMock.expects("getAllDrinks").returns(new Promise<Drink[]>((resolve) => resolve([drink, drink1])));
            serviceMock.expects("getAllCups").returns(new Promise<Cup[]>((resolve) => resolve([cup35, cup75])));
            serviceMock.expects("getAllResources").returns(new Promise<Resource[]>((resolve) => resolve([sugar, water])));
            mockController = sinon.mock(controller);
        });

        afterEach(function () {
            mockController.restore();
            serviceMock.restore();
        });

        it("Should confirm the order given correct answers", async function () {
            mockController.expects("getDrinkSelection").returns(drink1);
            mockController.expects("getSizeSelection").returns(cup35);
            mockController.expects("getCupChoice").returns(true);
            mockController.expects("getSugarSelection").returns(5);
            mockController.expects("getConfirmation").returns(true);

            serviceMock.expects("updateStock").exactly(3);
            serviceMock.expects("save").once();

            await controller.startOrder();

            serviceMock.verify();
        });

        describe("Should cancel the order when the user asked to", async function() {

            const values = [
                { args: [true, false, false, false, false] },
                { args: [false, true, false, false, false] },
                { args: [false, false, true, false, false] },
                { args: [false, false, false, true, false] },
                { args: [false, false, false, false, true] }
            ];


            values.forEach((args, index) => {
                it("Parameter " + (index + 1), async function() {

                    if (args[0]) {
                        mockController.expects("getDrinkSelection").throws(new Error());
                    } else {
                        mockController.expects("getDrinkSelection").returns(drink1);
                    }

                    if (args[1]) {
                        mockController.expects("getSizeSelection").throws(new Error());
                    } else {
                        mockController.expects("getSizeSelection").returns(cup35);
                    }

                    if (args[2]) {
                        mockController.expects("getCupChoice").throws(new Error());
                    } else {
                        mockController.expects("getCupChoice").returns(true);
                    }

                    if (args[3]) {
                        mockController.expects("getSugarSelection").throws(new Error());
                    } else {
                        mockController.expects("getSugarSelection").returns(5);
                    }

                    if (args[4]) {
                        mockController.expects("getConfirmation").throws(new Error());
                    } else {
                        mockController.expects("getConfirmation").returns(true);
                    }

                    serviceMock.expects("updateStock").never();
                    serviceMock.expects("save").never();

                    controller.startOrder().then(() => {
                        throw new Error("Should reject");
                    }).catch(() => {
                        serviceMock.verify();
                    });

                });
            });
        });

        it("Should reduce the price when no cup chosen", async function () {
            mockController.expects("getDrinkSelection").returns(drink1);
            mockController.expects("getSizeSelection").returns(cup35);
            mockController.expects("getCupChoice").returns(false);
            mockController.expects("getSugarSelection").returns(5);
            mockController.expects("getConfirmation").returns(true);

            serviceMock.expects("updateStock").exactly(3);
            serviceMock.expects("save").once();

            let order = await controller.startOrder();

            assert.equal(order.price, drink1.price * cup35.size - cup35.price);

            serviceMock.verify();
        });
    });
})