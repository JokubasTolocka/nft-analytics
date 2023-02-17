import * as Types from './operationsTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const AuthenticateDocument = gql`
  mutation authenticate($authenticateInput: AuthenticateInput!) {
    authenticate(authenticateInput: $authenticateInput)
  }
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  Types.AuthenticateMutation,
  Types.AuthenticateMutationVariables
>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      authenticateInput: // value for 'authenticateInput'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AuthenticateMutation, Types.AuthenticateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AuthenticateMutation, Types.AuthenticateMutationVariables>(
    AuthenticateDocument,
    options
  );
}
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = Apollo.MutationResult<Types.AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  Types.AuthenticateMutation,
  Types.AuthenticateMutationVariables
>;
export const CheckIfUserExistsDocument = gql`
  mutation checkIfUserExists($walletAddress: String!) {
    checkIfUserExists(walletAddress: $walletAddress) {
      walletAddress
      nonce
    }
  }
`;
export type CheckIfUserExistsMutationFn = Apollo.MutationFunction<
  Types.CheckIfUserExistsMutation,
  Types.CheckIfUserExistsMutationVariables
>;

/**
 * __useCheckIfUserExistsMutation__
 *
 * To run a mutation, you first call `useCheckIfUserExistsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckIfUserExistsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkIfUserExistsMutation, { data, loading, error }] = useCheckIfUserExistsMutation({
 *   variables: {
 *      walletAddress: // value for 'walletAddress'
 *   },
 * });
 */
export function useCheckIfUserExistsMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.CheckIfUserExistsMutation, Types.CheckIfUserExistsMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CheckIfUserExistsMutation, Types.CheckIfUserExistsMutationVariables>(
    CheckIfUserExistsDocument,
    options
  );
}
export type CheckIfUserExistsMutationHookResult = ReturnType<typeof useCheckIfUserExistsMutation>;
export type CheckIfUserExistsMutationResult = Apollo.MutationResult<Types.CheckIfUserExistsMutation>;
export type CheckIfUserExistsMutationOptions = Apollo.BaseMutationOptions<
  Types.CheckIfUserExistsMutation,
  Types.CheckIfUserExistsMutationVariables
>;
export const MyUserDocument = gql`
  query myUser {
    myUser {
      id
      walletAddress
      email
      favoritedCollections
    }
  }
`;

/**
 * __useMyUserQuery__
 *
 * To run a query within a React component, call `useMyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyUserQuery(baseOptions?: Apollo.QueryHookOptions<Types.MyUserQuery, Types.MyUserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.MyUserQuery, Types.MyUserQueryVariables>(MyUserDocument, options);
}
export function useMyUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.MyUserQuery, Types.MyUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.MyUserQuery, Types.MyUserQueryVariables>(MyUserDocument, options);
}
export type MyUserQueryHookResult = ReturnType<typeof useMyUserQuery>;
export type MyUserLazyQueryHookResult = ReturnType<typeof useMyUserLazyQuery>;
export type MyUserQueryResult = Apollo.QueryResult<Types.MyUserQuery, Types.MyUserQueryVariables>;
