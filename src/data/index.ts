import { User } from "@/data/types";

type GetUsersParams<K extends keyof User = keyof User> = {
  limit?: number;
  skip?: number;
  select?: K[];
};

type GetUserResult<K extends keyof User> = [K] extends [never]
  ? User[]
  : // id is always included
    Pick<User, K | "id">[];

export async function getUsers<K extends keyof User>(
  params: GetUsersParams<K> = {},
): Promise<GetUserResult<K>> {
  const { limit = 10, skip = 0, select = [] } = params;
  const url = new URL("https://dummyjson.com/users");
  url.searchParams.set("limit", limit.toString());
  url.searchParams.set("skip", skip.toString());
  if (select.length > 0) {
    const keys = [...new Set(select)].join(",");
    url.searchParams.set("select", keys);
  }
  const result = (await fetch(url).then((res) => res.json())) as any;
  return result.users;
}
