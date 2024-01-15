"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@pnp/nodejs");
var core_1 = require("@pnp/core");
test('should get a random string', function () {
    expect((0, core_1.getRandomString)(5).length).toBe(5);
});
