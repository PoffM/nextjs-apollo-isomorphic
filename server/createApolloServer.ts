import { ApolloServer, PubSub } from "apollo-server-express";
import { readFileSync } from "fs";
import { join } from "path";
import { resolvers } from "./resolvers";
import { IResolverContext } from "./types";

const typeDefs = readFileSync(join(__dirname, "schema.gql")).toString() as any;

export function createApolloServer() {
  let count = 0;

  const pubSub = new PubSub();

  const context: IResolverContext = {
    getCount() {
      return count;
    },
    increment() {
      return ++count;
    },
    pubSub
  };

  return new ApolloServer({
    context,
    resolvers,
    typeDefs
  });
}
