import { spy, assert } from "sinon";
import setupRoutes from "../../src/routes/setupRoutes.js";

describe('app', () => {
  let routerStub;
  let req = {};
  let res = {};

  beforeEach(() => {
    routerStub = {
      get: spy()
    }
    res = {
      render: spy(),
    }
    req = {};
  });

  it('should call stub', () => {
    setupRoutes(routerStub);

    assert.calledOnceWithMatch(routerStub.get, '/hello', Function);
  });

  it('should call res.render', () => {
    setupRoutes(routerStub);
    const routeHandler = routerStub.get.args[0][1];

    routeHandler(req, res);

    assert.calledOnceWithMatch(res.render, 'test.njk', {
      title: "Form",
      message: "Hello"
    });
  });
});