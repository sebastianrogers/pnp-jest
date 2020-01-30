import { SPFetchClient } from "@pnp/nodejs-commonjs";
import { sp } from "@pnp/sp-commonjs";
import { getListItemWithAuthor } from "./listitem";

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

it("gets the default page with author information", async () => {
  const itemId = 1;
  const listItem = await getListItemWithAuthor("Pages", itemId);

  expect(listItem.ID).toBe(itemId);
  expect(listItem.Author.Id).toBeTruthy();
});
