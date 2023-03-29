import * as Types from './operationsTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetCollectionDocument = gql`
  query getCollection($collectionSlug: String!) {
    getCollection(collectionSlug: $collectionSlug) {
      name
      address
      description
      image
      bannerImage
      floorPrice
      volume
      supply
      assets {
        name
        image
      }
    }
  }
`;

/**
 * __useGetCollectionQuery__
 *
 * To run a query within a React component, call `useGetCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCollectionQuery({
 *   variables: {
 *      collectionSlug: // value for 'collectionSlug'
 *   },
 * });
 */
export function useGetCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetCollectionQuery, Types.GetCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetCollectionQuery, Types.GetCollectionQueryVariables>(GetCollectionDocument, options);
}
export function useGetCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetCollectionQuery, Types.GetCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetCollectionQuery, Types.GetCollectionQueryVariables>(
    GetCollectionDocument,
    options
  );
}
export type GetCollectionQueryHookResult = ReturnType<typeof useGetCollectionQuery>;
export type GetCollectionLazyQueryHookResult = ReturnType<typeof useGetCollectionLazyQuery>;
export type GetCollectionQueryResult = Apollo.QueryResult<Types.GetCollectionQuery, Types.GetCollectionQueryVariables>;
export const SearchCollectionsDocument = gql`
  query searchCollections($searchSlug: String!) {
    searchCollections(searchSlug: $searchSlug) {
      name
      address
      slug
      image
    }
  }
`;

/**
 * __useSearchCollectionsQuery__
 *
 * To run a query within a React component, call `useSearchCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCollectionsQuery({
 *   variables: {
 *      searchSlug: // value for 'searchSlug'
 *   },
 * });
 */
export function useSearchCollectionsQuery(
  baseOptions: Apollo.QueryHookOptions<Types.SearchCollectionsQuery, Types.SearchCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.SearchCollectionsQuery, Types.SearchCollectionsQueryVariables>(
    SearchCollectionsDocument,
    options
  );
}
export function useSearchCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.SearchCollectionsQuery, Types.SearchCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.SearchCollectionsQuery, Types.SearchCollectionsQueryVariables>(
    SearchCollectionsDocument,
    options
  );
}
export type SearchCollectionsQueryHookResult = ReturnType<typeof useSearchCollectionsQuery>;
export type SearchCollectionsLazyQueryHookResult = ReturnType<typeof useSearchCollectionsLazyQuery>;
export type SearchCollectionsQueryResult = Apollo.QueryResult<
  Types.SearchCollectionsQuery,
  Types.SearchCollectionsQueryVariables
>;
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
      favoritedCollections {
        id
      }
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
export const GetMyAssetsDocument = gql`
  query getMyAssets {
    getMyAssets {
      name
      image
      collectionSlug
      collectionName
    }
  }
`;

/**
 * __useGetMyAssetsQuery__
 *
 * To run a query within a React component, call `useGetMyAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyAssetsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetMyAssetsQuery, Types.GetMyAssetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetMyAssetsQuery, Types.GetMyAssetsQueryVariables>(GetMyAssetsDocument, options);
}
export function useGetMyAssetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.GetMyAssetsQuery, Types.GetMyAssetsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetMyAssetsQuery, Types.GetMyAssetsQueryVariables>(GetMyAssetsDocument, options);
}
export type GetMyAssetsQueryHookResult = ReturnType<typeof useGetMyAssetsQuery>;
export type GetMyAssetsLazyQueryHookResult = ReturnType<typeof useGetMyAssetsLazyQuery>;
export type GetMyAssetsQueryResult = Apollo.QueryResult<Types.GetMyAssetsQuery, Types.GetMyAssetsQueryVariables>;
