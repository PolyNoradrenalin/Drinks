const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");
// https://gitlab.com/otmaneguenouni/testing-demo/-/blob/master/test/unit.js
//+ nyc for coverage

//var sandbox = sinon.createSandbox();

import {returnTwo} from "./example";

function returnFalse(callback: any) {
    return false;
}

describe("Check return 2", function () {
    it("Should return 2", function () {
        let test = 2;

        assert.equal(returnTwo(), 2);
    })
})

describe("Unit tests try", function () {
    beforeEach(function () {
        //stubbing
        this.stub = sinon.stub();
        //mocking
        this.mock = sinon.mock();
    });

    afterEach(function () {
        //restore
        sinon.restore();
    });

    it("should do something", function () {
        var callback = sinon.fake.returns(true);
        var proxy = returnFalse(callback);
        var test = !true;
        assert.equal(proxy, test);
    });
});


