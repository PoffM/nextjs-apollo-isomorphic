import { IFieldResolver } from "graphql-tools";
import { IResolverContext } from "server/types";

export const count: IFieldResolver<{}, IResolverContext> = (
  _,
  __,
  { getCount }
) => getCount();
