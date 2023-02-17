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

export type AuthenticateInput = {
  /** signature of the wallet of the user */
  signature: Scalars['String'];
  /** walletAddress of the user */
  walletAddress: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  authenticate: Scalars['String'];
  checkIfUserExists: User;
};

export type MutationAuthenticateArgs = {
  authenticateInput: AuthenticateInput;
};

export type MutationCheckIfUserExistsArgs = {
  walletAddress: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  myUser: User;
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
