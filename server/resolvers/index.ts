import { IResolvers } from "graphql-tools";
import { increment } from "./increment";
import { onIncrement } from "./onIncrement";
import { count } from "./count";

export const resolvers: IResolvers = {
  Mutation: {
    increment
  },
  Query: {
    count
  },
  Subscription: {
    onIncrement
  }
};
