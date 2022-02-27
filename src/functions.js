import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const connect = gql`
mutation($email: String!,$password:String!) {signIn(signInInput:{email:$email,password:$password}) {
  _id
  firstName
  lastName}
}
`;
