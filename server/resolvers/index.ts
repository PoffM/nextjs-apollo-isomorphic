import { IResolvers } from "graphql-tools";
import { count } from "./count";
import { increment } from "./increment";

export const resolvers: IResolvers = {
  Mutation: {
    increment
  },
  Query: {
    count
  }
};
