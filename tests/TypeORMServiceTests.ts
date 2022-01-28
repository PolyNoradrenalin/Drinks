import * as typeorm from "typeorm";

const sinon = require("sinon");
const chai = require("chai");
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");

import {TypeORMService} from "../src/service/TypeORMService";
import {Drink} from "../src/entity/Drink";
import {SinonMock, stub} from "sinon";
import {Cup} from "../src/entity/Cup";
import {Resource} from "../src/entity/Resource";

describe("Service", function () {
    let service: TypeORMService;
    let serviceMock : SinonMock;
    let entityStub;
    let connStub;

    beforeEach(function () {
        service = new TypeORMService();
        entityStub = sinon.createStubInstance(typeorm.EntityManager);
        connStub = sinon.createStubInstance(typeorm.Connection);
        serviceMock = sinon.mock(service);
        serviceMock.expects("getServiceConnection").returns(connStub);
        connStub.manager = entityStub;
    })

    afterEach(function () {
        sinon.restore();
    })

    describe("getAllDrinks", function () {
        let d1 = new Drink();
        d1.name = "Venta";
        d1.content = "Orange tasting fizzy soda";
        d1.price = 2.50;
        let d2 = new Drink();
        d2.name = "Cola-coda";
        d2.content = "Black/caramel colored fizzy soda";
        d2.price = 2.40;
        let d3 = new Drink();
        d3.name = "Lip-mega-ton Fire Tea";
        d3.content = "Light brown colored non-fizzy sugary soda";
        d3.price = 3.40;
        let drinksTest = {d1, d2, d3};

        it('Should return all cups', async () => {
            entityStub.find.withArgs(Drink).returns(drinksTest);

            let drinks = service.getAllDrinks();

            assert.equal(drinks, drinksTest);
        })

        it("Should return empty list", async () => {
            entityStub.find.withArgs(Drink).returns([]);

            let drinks = await service.getAllDrinks();

            assert.equal(drinks.length, 0);
        })
    });

    describe("getAllCups", function () {
        let c1 = new Cup();
        c1.size = 33;
        c1.stock = 2;
        c1.price = .10;
        let c2 = new Cup();
        c2.size = 75;
        c2.stock = 47;
        c2.price = .11;
        let c3 = new Cup();
        c3.size = 25;
        c3.stock = 4;
        c3.price = .18;
        let cupsTest = {c1, c2, c3};

        it('Should return all drinks', async () => {
            entityStub.find.withArgs(Cup).returns(cupsTest);

            let cups = service.getAllCups();

            assert.equal(cups, cupsTest);
        })

        it("Should return empty list", async () => {
            entityStub.find.withArgs(Cup).returns([]);

            let cups = await service.getAllCups();

            assert.equal(cups.length, 0);
        })
    });

    describe("getAllResources", function () {
        let r1 = new Resource();
        r1.name_resource = "Water";
        r1.stock_resource = 2;
        let r2 = new Resource();
        r2.name_resource = "Sugar";
        r2.stock_resource = 2;
        let resourcesTest = {r1, r2};

        it('Should return all resources', async () => {
            entityStub.find.withArgs(Resource).returns(resourcesTest);

            let resource = service.getAllResources();

            assert.equal(resource, resourcesTest);
        })

        it("Should return empty list", async () => {
            entityStub.find.withArgs(Resource).returns([]);

            let resource = await service.getAllResources();

            assert.equal(resource.length, 0);
        })
    });
})
