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

export type CreateUserInput = {
  /** email of the user */
  email: Scalars['String'];
  /** walletAddress of the user */
  walletAddress: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  createUser: User;
  removeUser: User;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationRemoveUserArgs = {
  _id: Scalars['String'];
};

export type Query = {
  __typename: 'Query';
  user: User;
  users: Array<User>;
};

export type QueryUserArgs = {
  _id: Scalars['String'];
};

export type User = {
  __typename: 'User';
  _id: Scalars['String'];
  /** User email  */
  email: Scalars['String'];
  /** User walletAddress */
  walletAddress: Scalars['String'];
};
