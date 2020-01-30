import { SPFetchClient } from "@pnp/nodejs-commonjs";
import { sp } from "@pnp/sp-commonjs";
import { getListItem } from "./listitem";

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// we call setup to use the node client
sp.setup({
  sp: {
    fetchClientFactory: () => {
      return new SPFetchClient(
        process.env.SP_URL,
        process.env.SP_CLIENT_ID,
        process.env.SP_CLIENT_SECRET
      );
    }
  }
});

it("gets the default page", async () => {
  const listItem = await getListItem("Pages", 1);
  expect(listItem.ID).toBe(1);
});
