import * as Types from './types';

export type GetCollectionQueryVariables = Types.Exact<{
  collectionSlug: Types.Scalars['String'];
}>;

export type GetCollectionQuery = {
  __typename: 'Query';
  getCollection: {
    __typename: 'Collection';
    name: string;
    address: string;
    description: string;
    image: string;
    bannerImage: string;
    floorPrice: number;
    volume: number;
    supply: number;
    assets: Array<{ __typename: 'Asset'; name: string; image: string }>;
  };
};

export type SearchCollectionsQueryVariables = Types.Exact<{
  searchSlug: Types.Scalars['String'];
}>;

export type SearchCollectionsQuery = {
  __typename: 'Query';
  searchCollections: Array<{
    __typename: 'ShortCollection';
    name: string;
    address: string;
    slug: string;
    image: string;
  }>;
};

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
