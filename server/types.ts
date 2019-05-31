import { PubSub } from "graphql-subscriptions";

export interface IResolverContext {
  getCount: () => number;
  increment: () => number;
  pubSub: PubSub;
}
