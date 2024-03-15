import { expect } from "chai";
import calculator from "../util.js";

it("Is 5 + 2 = 7", (done) => {
    //define test assertion
    expect(calculator.add(5, 2)).to.equal(7)
    done();
});

it("Is undefined + undefined = 0", (done) => {
    //define test assertion
    expect(calculator.add(undefined, undefined)).to.equal(0)
    done();
});