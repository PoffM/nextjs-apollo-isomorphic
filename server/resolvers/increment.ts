import { IFieldResolver } from "graphql-tools";
import { IResolverContext } from "server/types";

export const increment: IFieldResolver<{}, IResolverContext> = (
  _,
  __,
  { increment }
) => increment();
