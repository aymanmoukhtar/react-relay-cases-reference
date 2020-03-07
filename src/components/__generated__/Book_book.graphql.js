/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Book_book$ref: FragmentReference;
declare export opaque type Book_book$fragmentType: Book_book$ref;
export type Book_book = {|
  +title: ?string,
  +$refType: Book_book$ref,
|};
export type Book_book$data = Book_book;
export type Book_book$key = {
  +$data?: Book_book$data,
  +$fragmentRefs: Book_book$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Book_book",
  "type": "Book",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f3af23265a67b2a57090866be23f01dc';

module.exports = node;
