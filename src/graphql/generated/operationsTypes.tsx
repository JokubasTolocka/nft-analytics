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

export type MarkCollectionAsFavouriteMutationVariables = Types.Exact<{
  markCollectionAsFavouriteData: Types.MarkCollectionAsFavouriteInput;
}>;

export type MarkCollectionAsFavouriteMutation = { __typename: 'Mutation'; markCollectionAsFavourite: boolean };

export type FavouriteCollectionFragment = {
  __typename: 'FavouriteCollection';
  collectionSlug?: string | null;
  address: string;
  name: string;
  image?: string | null;
  pastFloorPriceArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
  pastVolumeArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
};

export type GetFavouritedCollectionsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetFavouritedCollectionsQuery = {
  __typename: 'Query';
  getFavouritedCollections: Array<{
    __typename: 'FavouriteCollection';
    collectionSlug?: string | null;
    address: string;
    name: string;
    image?: string | null;
    pastFloorPriceArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
    pastVolumeArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
  }>;
};

export type GetFavouritedCollectionQueryVariables = Types.Exact<{
  address: Types.Scalars['String'];
}>;

export type GetFavouritedCollectionQuery = {
  __typename: 'Query';
  getFavouritedCollection: {
    __typename: 'FavouriteCollection';
    collectionSlug?: string | null;
    address: string;
    name: string;
    image?: string | null;
    pastFloorPriceArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
    pastVolumeArray: Array<{ __typename: 'NumericalData'; data: number; time: any }>;
  };
};

export type UserFragment = {
  __typename: 'User';
  walletAddress: string;
  email?: string | null;
  hasSkippedEmail: boolean;
  priceDifference: number;
  favouritedCollections: Array<string>;
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
    nonce: string;
    walletAddress: string;
    email?: string | null;
    hasSkippedEmail: boolean;
    priceDifference: number;
    favouritedCollections: Array<string>;
  };
};

export type MyUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MyUserQuery = {
  __typename: 'Query';
  myUser: {
    __typename: 'User';
    walletAddress: string;
    email?: string | null;
    hasSkippedEmail: boolean;
    priceDifference: number;
    favouritedCollections: Array<string>;
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

export type AddEmailMutation = {
  __typename: 'Mutation';
  addEmail: {
    __typename: 'User';
    walletAddress: string;
    email?: string | null;
    hasSkippedEmail: boolean;
    priceDifference: number;
    favouritedCollections: Array<string>;
  };
};

export type UpdatePriceDifferenceMutationVariables = Types.Exact<{
  priceDifference: Types.Scalars['Float'];
}>;

export type UpdatePriceDifferenceMutation = {
  __typename: 'Mutation';
  updatePriceDifference: {
    __typename: 'User';
    walletAddress: string;
    email?: string | null;
    hasSkippedEmail: boolean;
    priceDifference: number;
    favouritedCollections: Array<string>;
  };
};

export type SkipEmailMutationVariables = Types.Exact<{ [key: string]: never }>;

export type SkipEmailMutation = { __typename: 'Mutation'; skipEmail: boolean };
