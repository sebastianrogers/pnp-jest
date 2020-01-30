import { sp } from "@pnp/sp-commonjs";

export async function getListItemWithAuthor(
  listTitle: string,
  itemId: number
): Promise<any> {
  return await sp.web.lists
    .getByTitle(listTitle)
    .items.getById(itemId)
    .expand("Author")
    .select("*,Author/Id,Author/Title,Author/Name,Author/EMail")
    .get();
}
