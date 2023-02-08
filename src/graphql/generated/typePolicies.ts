import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type MutationKeySpecifier = ('createUser' | 'removeUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
  createUser?: FieldPolicy<any> | FieldReadFunction<any>;
  removeUser?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = ('user' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
  user?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = ('_id' | 'email' | 'walletAddress' | UserKeySpecifier)[];
export type UserFieldPolicy = {
  _id?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  walletAddress?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
