import {stub, assert} from "sinon";
import { test } from "../src/app.js";

describe('app', () => {
  let myStub = stub();

  it('should call stub', () => {
    test(myStub);

    assert.calledOnce(myStub);
  });
});