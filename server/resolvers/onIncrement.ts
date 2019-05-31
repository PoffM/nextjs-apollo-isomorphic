import { IResolverOptions } from "graphql-tools";
import { IResolverContext } from "server/types";
import { INCREMENT } from "./increment";

export const onIncrement: IResolverOptions<{}, IResolverContext> = {
  resolve: count => count,
  subscribe: (_, __, { pubSub }) => pubSub.asyncIterator(INCREMENT)
};
