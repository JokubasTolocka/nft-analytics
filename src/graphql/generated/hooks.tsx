import * as Types from './operationsTypes';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export const FavoriteCollectionFragmentDoc = gql`
  fragment FavoriteCollection on FavoriteCollection {
    collectionSlug
    address
    name
    image
    pastFloorPriceArray
    pastVolumeArray
  }
`;
export const UserFragmentDoc = gql`
  fragment User on User {
    walletAddress
    email
    hasSkippedEmail
    priceDifference
    favoritedCollections
  }
`;
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
export const MarkCollectionAsFavoriteDocument = gql`
  mutation markCollectionAsFavorite($markCollectionAsFavoriteData: MarkCollectionAsFavoriteInput!) {
    markCollectionAsFavorite(markCollectionAsFavoriteData: $markCollectionAsFavoriteData)
  }
`;
export type MarkCollectionAsFavoriteMutationFn = Apollo.MutationFunction<
  Types.MarkCollectionAsFavoriteMutation,
  Types.MarkCollectionAsFavoriteMutationVariables
>;

/**
 * __useMarkCollectionAsFavoriteMutation__
 *
 * To run a mutation, you first call `useMarkCollectionAsFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkCollectionAsFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markCollectionAsFavoriteMutation, { data, loading, error }] = useMarkCollectionAsFavoriteMutation({
 *   variables: {
 *      markCollectionAsFavoriteData: // value for 'markCollectionAsFavoriteData'
 *   },
 * });
 */
export function useMarkCollectionAsFavoriteMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.MarkCollectionAsFavoriteMutation,
    Types.MarkCollectionAsFavoriteMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.MarkCollectionAsFavoriteMutation, Types.MarkCollectionAsFavoriteMutationVariables>(
    MarkCollectionAsFavoriteDocument,
    options
  );
}
export type MarkCollectionAsFavoriteMutationHookResult = ReturnType<typeof useMarkCollectionAsFavoriteMutation>;
export type MarkCollectionAsFavoriteMutationResult = Apollo.MutationResult<Types.MarkCollectionAsFavoriteMutation>;
export type MarkCollectionAsFavoriteMutationOptions = Apollo.BaseMutationOptions<
  Types.MarkCollectionAsFavoriteMutation,
  Types.MarkCollectionAsFavoriteMutationVariables
>;
export const GetFavoritedCollectionsDocument = gql`
  query getFavoritedCollections {
    getFavoritedCollections {
      ...FavoriteCollection
    }
  }
  ${FavoriteCollectionFragmentDoc}
`;

/**
 * __useGetFavoritedCollectionsQuery__
 *
 * To run a query within a React component, call `useGetFavoritedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoritedCollectionsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.GetFavoritedCollectionsQuery, Types.GetFavoritedCollectionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetFavoritedCollectionsQuery, Types.GetFavoritedCollectionsQueryVariables>(
    GetFavoritedCollectionsDocument,
    options
  );
}
export function useGetFavoritedCollectionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetFavoritedCollectionsQuery,
    Types.GetFavoritedCollectionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetFavoritedCollectionsQuery, Types.GetFavoritedCollectionsQueryVariables>(
    GetFavoritedCollectionsDocument,
    options
  );
}
export type GetFavoritedCollectionsQueryHookResult = ReturnType<typeof useGetFavoritedCollectionsQuery>;
export type GetFavoritedCollectionsLazyQueryHookResult = ReturnType<typeof useGetFavoritedCollectionsLazyQuery>;
export type GetFavoritedCollectionsQueryResult = Apollo.QueryResult<
  Types.GetFavoritedCollectionsQuery,
  Types.GetFavoritedCollectionsQueryVariables
>;
export const GetFavoritedCollectionDocument = gql`
  query getFavoritedCollection($address: String!) {
    getFavoritedCollection(address: $address) {
      ...FavoriteCollection
    }
  }
  ${FavoriteCollectionFragmentDoc}
`;

/**
 * __useGetFavoritedCollectionQuery__
 *
 * To run a query within a React component, call `useGetFavoritedCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritedCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritedCollectionQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetFavoritedCollectionQuery(
  baseOptions: Apollo.QueryHookOptions<Types.GetFavoritedCollectionQuery, Types.GetFavoritedCollectionQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.GetFavoritedCollectionQuery, Types.GetFavoritedCollectionQueryVariables>(
    GetFavoritedCollectionDocument,
    options
  );
}
export function useGetFavoritedCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetFavoritedCollectionQuery,
    Types.GetFavoritedCollectionQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.GetFavoritedCollectionQuery, Types.GetFavoritedCollectionQueryVariables>(
    GetFavoritedCollectionDocument,
    options
  );
}
export type GetFavoritedCollectionQueryHookResult = ReturnType<typeof useGetFavoritedCollectionQuery>;
export type GetFavoritedCollectionLazyQueryHookResult = ReturnType<typeof useGetFavoritedCollectionLazyQuery>;
export type GetFavoritedCollectionQueryResult = Apollo.QueryResult<
  Types.GetFavoritedCollectionQuery,
  Types.GetFavoritedCollectionQueryVariables
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
      ...User
      nonce
    }
  }
  ${UserFragmentDoc}
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
      ...User
    }
  }
  ${UserFragmentDoc}
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
export const AddEmailDocument = gql`
  mutation addEmail($email: String!) {
    addEmail(email: $email) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type AddEmailMutationFn = Apollo.MutationFunction<Types.AddEmailMutation, Types.AddEmailMutationVariables>;

/**
 * __useAddEmailMutation__
 *
 * To run a mutation, you first call `useAddEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmailMutation, { data, loading, error }] = useAddEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AddEmailMutation, Types.AddEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AddEmailMutation, Types.AddEmailMutationVariables>(AddEmailDocument, options);
}
export type AddEmailMutationHookResult = ReturnType<typeof useAddEmailMutation>;
export type AddEmailMutationResult = Apollo.MutationResult<Types.AddEmailMutation>;
export type AddEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.AddEmailMutation,
  Types.AddEmailMutationVariables
>;
export const UpdatePriceDifferenceDocument = gql`
  mutation updatePriceDifference($priceDifference: Float!) {
    updatePriceDifference(priceDifference: $priceDifference) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type UpdatePriceDifferenceMutationFn = Apollo.MutationFunction<
  Types.UpdatePriceDifferenceMutation,
  Types.UpdatePriceDifferenceMutationVariables
>;

/**
 * __useUpdatePriceDifferenceMutation__
 *
 * To run a mutation, you first call `useUpdatePriceDifferenceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePriceDifferenceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePriceDifferenceMutation, { data, loading, error }] = useUpdatePriceDifferenceMutation({
 *   variables: {
 *      priceDifference: // value for 'priceDifference'
 *   },
 * });
 */
export function useUpdatePriceDifferenceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdatePriceDifferenceMutation,
    Types.UpdatePriceDifferenceMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdatePriceDifferenceMutation, Types.UpdatePriceDifferenceMutationVariables>(
    UpdatePriceDifferenceDocument,
    options
  );
}
export type UpdatePriceDifferenceMutationHookResult = ReturnType<typeof useUpdatePriceDifferenceMutation>;
export type UpdatePriceDifferenceMutationResult = Apollo.MutationResult<Types.UpdatePriceDifferenceMutation>;
export type UpdatePriceDifferenceMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdatePriceDifferenceMutation,
  Types.UpdatePriceDifferenceMutationVariables
>;
export const SkipEmailDocument = gql`
  mutation skipEmail {
    skipEmail
  }
`;
export type SkipEmailMutationFn = Apollo.MutationFunction<Types.SkipEmailMutation, Types.SkipEmailMutationVariables>;

/**
 * __useSkipEmailMutation__
 *
 * To run a mutation, you first call `useSkipEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSkipEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [skipEmailMutation, { data, loading, error }] = useSkipEmailMutation({
 *   variables: {
 *   },
 * });
 */
export function useSkipEmailMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.SkipEmailMutation, Types.SkipEmailMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.SkipEmailMutation, Types.SkipEmailMutationVariables>(SkipEmailDocument, options);
}
export type SkipEmailMutationHookResult = ReturnType<typeof useSkipEmailMutation>;
export type SkipEmailMutationResult = Apollo.MutationResult<Types.SkipEmailMutation>;
export type SkipEmailMutationOptions = Apollo.BaseMutationOptions<
  Types.SkipEmailMutation,
  Types.SkipEmailMutationVariables
>;
