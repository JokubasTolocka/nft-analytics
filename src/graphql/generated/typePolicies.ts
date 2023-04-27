import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AssetKeySpecifier = ('collectionName' | 'collectionSlug' | 'image' | 'name' | AssetKeySpecifier)[];
export type AssetFieldPolicy = {
  collectionName?: FieldPolicy<any> | FieldReadFunction<any>;
  collectionSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CollectionKeySpecifier = (
  | 'address'
  | 'assets'
  | 'bannerImage'
  | 'description'
  | 'floorPrice'
  | 'id'
  | 'image'
  | 'name'
  | 'supply'
  | 'volume'
  | CollectionKeySpecifier
)[];
export type CollectionFieldPolicy = {
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  assets?: FieldPolicy<any> | FieldReadFunction<any>;
  bannerImage?: FieldPolicy<any> | FieldReadFunction<any>;
  description?: FieldPolicy<any> | FieldReadFunction<any>;
  floorPrice?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  supply?: FieldPolicy<any> | FieldReadFunction<any>;
  volume?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type FavouriteCollectionKeySpecifier = (
  | 'address'
  | 'collectionSlug'
  | 'image'
  | 'name'
  | 'owners'
  | 'pastFloorPriceArray'
  | 'pastVolumeArray'
  | FavouriteCollectionKeySpecifier
)[];
export type FavouriteCollectionFieldPolicy = {
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  collectionSlug?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  owners?: FieldPolicy<any> | FieldReadFunction<any>;
  pastFloorPriceArray?: FieldPolicy<any> | FieldReadFunction<any>;
  pastVolumeArray?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'addEmail'
  | 'authenticate'
  | 'checkIfUserExists'
  | 'markCollectionAsFavourite'
  | 'skipEmail'
  | 'updatePriceDifference'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  addEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  authenticate?: FieldPolicy<any> | FieldReadFunction<any>;
  checkIfUserExists?: FieldPolicy<any> | FieldReadFunction<any>;
  markCollectionAsFavourite?: FieldPolicy<any> | FieldReadFunction<any>;
  skipEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  updatePriceDifference?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'getCollection'
  | 'getFavouritedCollection'
  | 'getFavouritedCollections'
  | 'getMyAssets'
  | 'myUser'
  | 'searchCollections'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  getCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  getFavouritedCollection?: FieldPolicy<any> | FieldReadFunction<any>;
  getFavouritedCollections?: FieldPolicy<any> | FieldReadFunction<any>;
  getMyAssets?: FieldPolicy<any> | FieldReadFunction<any>;
  myUser?: FieldPolicy<any> | FieldReadFunction<any>;
  searchCollections?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type ShortCollectionKeySpecifier = (
  | 'address'
  | 'id'
  | 'image'
  | 'name'
  | 'slug'
  | ShortCollectionKeySpecifier
)[];
export type ShortCollectionFieldPolicy = {
  address?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  image?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  slug?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'email'
  | 'favouritedCollections'
  | 'hasSkippedEmail'
  | 'id'
  | 'nonce'
  | 'priceDifference'
  | 'walletAddress'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  favouritedCollections?: FieldPolicy<any> | FieldReadFunction<any>;
  hasSkippedEmail?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  nonce?: FieldPolicy<any> | FieldReadFunction<any>;
  priceDifference?: FieldPolicy<any> | FieldReadFunction<any>;
  walletAddress?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  Asset?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | AssetKeySpecifier | (() => undefined | AssetKeySpecifier);
    fields?: AssetFieldPolicy;
  };
  Collection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier);
    fields?: CollectionFieldPolicy;
  };
  FavouriteCollection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | FavouriteCollectionKeySpecifier | (() => undefined | FavouriteCollectionKeySpecifier);
    fields?: FavouriteCollectionFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  ShortCollection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | ShortCollectionKeySpecifier | (() => undefined | ShortCollectionKeySpecifier);
    fields?: ShortCollectionFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
