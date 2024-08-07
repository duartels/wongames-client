/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query QueryGames($pagination: PaginationArg) {\n    games(pagination: $pagination) {\n      data {\n        attributes {\n          name\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          price\n        }\n      }\n    }\n  }\n": types.QueryGamesDocument,
    "\n  query QueryGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          short_description\n          description\n          price\n          rating\n          release_date\n          gallery {\n            data {\n              attributes {\n                src: url\n                label: alternativeText\n              }\n            }\n          }\n          cover {\n            data {\n              attributes {\n                src: url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          publisher {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          categories {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          platforms {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.QueryGameBySlugDocument,
    "\n  query QueryHome {\n    banners {\n      data {\n        attributes {\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          title\n          subtitle\n          button {\n            label\n            link\n          }\n          ribbon {\n            text\n            color\n            size\n          }\n        }\n      }\n    }\n  }\n": types.QueryHomeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryGames($pagination: PaginationArg) {\n    games(pagination: $pagination) {\n      data {\n        attributes {\n          name\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          price\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryGames($pagination: PaginationArg) {\n    games(pagination: $pagination) {\n      data {\n        attributes {\n          name\n          slug\n          cover {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          price\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          short_description\n          description\n          price\n          rating\n          release_date\n          gallery {\n            data {\n              attributes {\n                src: url\n                label: alternativeText\n              }\n            }\n          }\n          cover {\n            data {\n              attributes {\n                src: url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          publisher {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          categories {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          platforms {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryGameBySlug($slug: String!) {\n    games(filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          short_description\n          description\n          price\n          rating\n          release_date\n          gallery {\n            data {\n              attributes {\n                src: url\n                label: alternativeText\n              }\n            }\n          }\n          cover {\n            data {\n              attributes {\n                src: url\n              }\n            }\n          }\n          developers {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          publisher {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          categories {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n          platforms {\n            data {\n              attributes {\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query QueryHome {\n    banners {\n      data {\n        attributes {\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          title\n          subtitle\n          button {\n            label\n            link\n          }\n          ribbon {\n            text\n            color\n            size\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query QueryHome {\n    banners {\n      data {\n        attributes {\n          image {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          title\n          subtitle\n          button {\n            label\n            link\n          }\n          ribbon {\n            text\n            color\n            size\n          }\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;