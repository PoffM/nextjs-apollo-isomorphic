import gql from "graphql-tag";
import { Query } from "react-apollo";

interface ICountQueryResponse {
  count: number;
}

const GET_COUNT = gql`
  query CountQuery {
    count
  }
`;

export function Counter() {
  return (
    <Query<ICountQueryResponse> query={GET_COUNT}>
      {({ data }) => {
        if (!data) {
          return null;
        }

        const { count } = data;
        return <div>Count: {count}</div>;
      }}
    </Query>
  );
}
