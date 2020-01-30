import { sp } from "@pnp/sp-commonjs";

export async function getListItem(
  listTitle: string,
  itemId: number
): Promise<any> {
  return await sp.web.lists
    .getByTitle(listTitle)
    .items.getById(itemId)
    .get();
}