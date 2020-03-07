/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Book_book$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Books_books$ref: FragmentReference;
declare export opaque type Books_books$fragmentType: Books_books$ref;
export type Books_books = {|
  +edges: ?$ReadOnlyArray<{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: Book_book$ref,
    |}
  |}>,
  +$refType: Books_books$ref,
|};
export type Books_books$data = Books_books;
export type Books_books$key = {
  +$data?: Books_books$data,
  +$fragmentRefs: Books_books$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Books_books",
  "type": "BookConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BookEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Book",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "Book_book",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0ceb23380268065c3a907aead3f8fca2';

module.exports = node;
