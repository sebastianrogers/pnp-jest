import "@pnp/nodejs"
import { getRandomString } from "@pnp/core";

test('should get a random string', () => {
    expect(getRandomString(5).length).toBe(5);
});
