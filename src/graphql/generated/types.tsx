export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Asset = {
  __typename: 'Asset';
  collectionName?: Maybe<Scalars['String']>;
  collectionSlug?: Maybe<Scalars['String']>;
  /** Asset image */
  image: Scalars['String'];
  name: Scalars['String'];
};

export type AuthenticateInput = {
  /** signature of the wallet of the user */
  signature: Scalars['String'];
  /** walletAddress of the user */
  walletAddress: Scalars['String'];
};

export type Collection = {
  __typename: 'Collection';
  /** Collection address */
  address?: Maybe<Scalars['String']>;
  /** Collection assets */
  assets: Array<Asset>;
  /** Collection banner */
  bannerImage?: Maybe<Scalars['String']>;
  /** Collection description */
  description: Scalars['String'];
  /** Collection floor price */
  floorPrice?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  /** Collection image  */
  image?: Maybe<Scalars['String']>;
  /** Collection name */
  name: Scalars['String'];
  /** Collection supply */
  supply: Scalars['Float'];
  /** Collection volume */
  volume?: Maybe<Scalars['Float']>;
};

export type MarkCollectionAsFavoriteInput = {
  /** Collection address */
  address: Scalars['String'];
  /** Collection slug */
  collectionSlug: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  authenticate: Scalars['String'];
  checkIfUserExists: User;
  markCollectionAsFavorite: Scalars['Boolean'];
};

export type MutationAuthenticateArgs = {
  authenticateInput: AuthenticateInput;
};

export type MutationCheckIfUserExistsArgs = {
  walletAddress: Scalars['String'];
};

export type MutationMarkCollectionAsFavoriteArgs = {
  markCollectionAsFavoriteData: MarkCollectionAsFavoriteInput;
};

export type Query = {
  __typename: 'Query';
  getCollection: Collection;
  getMyAssets: Array<Asset>;
  myUser: User;
  searchCollections: Array<ShortCollection>;
};

export type QueryGetCollectionArgs = {
  collectionSlug: Scalars['String'];
};

export type QuerySearchCollectionsArgs = {
  searchSlug: Scalars['String'];
};

export type ShortCollection = {
  __typename: 'ShortCollection';
  /** Collection address */
  address: Scalars['String'];
  id: Scalars['String'];
  /** Collection image  */
  image?: Maybe<Scalars['String']>;
  /** Collection name */
  name: Scalars['String'];
  /** Collection slug */
  slug: Scalars['String'];
};

export type User = {
  __typename: 'User';
  /** User email  */
  email?: Maybe<Scalars['String']>;
  /** User favorited collections */
  favoritedCollections: Array<Scalars['String']>;
  id: Scalars['String'];
  /** User wallet nonce  */
  nonce: Scalars['String'];
  /** User walletAddress  */
  walletAddress: Scalars['String'];
};