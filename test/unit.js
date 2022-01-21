const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
//use chai-as-promised
chai.use(require("chai-as-promised"));
const assert = require("assert");
// https://gitlab.com/otmaneguenouni/testing-demo/-/blob/master/test/unit.js
//+ nyc for coverage


//var sandbox = sinon.createSandbox();

function returnFalse() {
    return false;
}


describe("Unit test try", function () {
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
        var test = true;
        assert.equal(proxy, true);
    });
});


