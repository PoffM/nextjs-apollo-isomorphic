import gql from "graphql-tag";
import { Mutation, Query, Subscription } from "react-apollo";

interface ICountQueryResponse {
  count: number;
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

export function Counter() {
  return (
    <div>
      <Query<ICountQueryResponse> query={GET_COUNT}>
        {({ data: initialData }) => (
          <Subscription<ICountQueryResponse> subscription={ON_INCREMENT}>
            {({ data: newData }) => {
              const data = newData || initialData;
              if (!data) {
                return null;
              }

              return <p>Click count: {data.count}</p>;
            }}
          </Subscription>
        )}
      </Query>
      <Mutation<{}> mutation={INCREMENT}>
        {increment => <button onClick={() => increment()}>Increment</button>}
      </Mutation>
    </div>
  );
}
