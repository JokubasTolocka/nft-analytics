import * as Types from './types';

export type AuthenticateMutationVariables = Types.Exact<{
  authenticateInput: Types.AuthenticateInput;
}>;

export type AuthenticateMutation = { __typename: 'Mutation'; authenticate: string };

export type CheckIfUserExistsMutationVariables = Types.Exact<{
  walletAddress: Types.Scalars['String'];
}>;

export type CheckIfUserExistsMutation = {
  __typename: 'Mutation';
  checkIfUserExists: { __typename: 'User'; walletAddress: string; nonce: string };
};

export type MyUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyUserQuery = {
  __typename: 'Query';
  myUser: {
    __typename: 'User';
    id: string;
    walletAddress: string;
    email?: string | null;
    favoritedCollections: Array<string>;
  };
};
