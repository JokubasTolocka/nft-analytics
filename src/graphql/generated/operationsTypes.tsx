import * as Types from './types';

export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename: 'Query';
  users: Array<{ __typename: 'User'; _id: string; walletAddress: string; email: string }>;
};
