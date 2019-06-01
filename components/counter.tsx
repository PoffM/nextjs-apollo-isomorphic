import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

interface ICountQueryResponse {
  count: number;
}

interface ICounterProps {
  increment?: () => void;
  initialCount?: number;
  newCount?: number;
}

const GET_COUNT = gql`
  query CountQuery {
    count
  }
`;

const ON_INCREMENT = gql`
  subscription CountSubscription {
    count: onIncrement
  }
`;

const INCREMENT = gql`
  mutation IncrementMutation {
    increment
  }
`;

export const Counter = compose(
  graphql<{}, ICountQueryResponse, {}, ICounterProps>(GET_COUNT, {
    props: ({ data }) => ({ initialCount: data && data.count })
  }),
  graphql<{}, ICountQueryResponse, {}, ICounterProps>(ON_INCREMENT, {
    props: ({ data }) => ({ newCount: data && data.count })
  }),
  graphql<{}, any, {}, ICounterProps>(INCREMENT, {
    props: ({ mutate }) => ({ increment: mutate })
  })
)(({ increment, initialCount, newCount }: ICounterProps) => (
  <div>
    <p>Click count: {newCount || initialCount}</p>
    <button onClick={increment && (() => increment())}>Increment</button>
  </div>
));
