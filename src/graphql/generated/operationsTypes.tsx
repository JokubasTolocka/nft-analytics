import * as Types from './types';

export type GetCollectionQueryVariables = Types.Exact<{
  collectionSlug: Types.Scalars['String'];
}>;

export type GetCollectionQuery = {
  __typename: 'Query';
  getCollection: {
    __typename: 'Collection';
    name: string;
    address?: string | null;
    description: string;
    image?: string | null;
    bannerImage?: string | null;
    floorPrice?: number | null;
    volume?: number | null;
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
    image?: string | null;
  }>;
};

export type MarkCollectionAsFavoriteMutationVariables = Types.Exact<{
  markCollectionAsFavoriteData: Types.MarkCollectionAsFavoriteInput;
}>;

export type MarkCollectionAsFavoriteMutation = { __typename: 'Mutation'; markCollectionAsFavorite: boolean };

export type GetFavoritedCollectionsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFavoritedCollectionsQuery = {
  __typename: 'Query';
  getFavoritedCollections: Array<{
    __typename: 'FavoriteCollection';
    collectionSlug?: string | null;
    address: string;
    name: string;
    image?: string | null;
    pastFloorPriceArray: Array<number>;
    pastVolumeArray: Array<number>;
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
  checkIfUserExists: {
    __typename: 'User';
    walletAddress: string;
    nonce: string;
    hasSkippedEmail: string;
    email?: string | null;
  };
};

export type MyUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyUserQuery = {
  __typename: 'Query';
  myUser: {
    __typename: 'User';
    id: string;
    walletAddress: string;
    email?: string | null;
    hasSkippedEmail: string;
    favoritedCollections: Array<string>;
  };
};

export type GetMyAssetsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetMyAssetsQuery = {
  __typename: 'Query';
  getMyAssets: Array<{
    __typename: 'Asset';
    name: string;
    image: string;
    collectionSlug?: string | null;
    collectionName?: string | null;
  }>;
};

export type AddEmailMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;

export type AddEmailMutation = { __typename: 'Mutation'; addEmail: boolean };

export type SkipEmailMutationVariables = Types.Exact<{ [key: string]: never }>;

export type SkipEmailMutation = { __typename: 'Mutation'; skipEmail: boolean };
