import { IFieldResolver } from "graphql-tools";
import { IResolverContext } from "server/types";

export const INCREMENT = "INCREMENT";

export const increment: IFieldResolver<{}, IResolverContext> = (
  _,
  __,
  { increment, pubSub }
) => {
  const newCount = increment();
  pubSub.publish(INCREMENT, newCount);
  return newCount;
};
