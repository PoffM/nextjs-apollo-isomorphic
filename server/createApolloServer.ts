import { readFileSync } from "fs";
import { join } from "path";
import { ApolloServer } from "apollo-server-express";
import { IResolverContext } from "./types";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync(join(__dirname, "schema.gql")).toString() as any;

export function createApolloServer() {
  let count = 0;

  const context: IResolverContext = {
    getCount() {
      return count;
    },
    increment() {
      return ++count;
    }
  };

  return new ApolloServer({
    context,
    resolvers,
    typeDefs
  });
}
