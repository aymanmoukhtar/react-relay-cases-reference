/**
 * @flow
 * @relayHash ddc3b808539b763638b000ac4e5453fc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookInput = {|
  id?: ?string,
  title?: ?string,
|};
export type HomeAddBookMutationVariables = {|
  book?: ?AddBookInput
|};
export type HomeAddBookMutationResponse = {|
  +addBook: ?{|
    +id: string,
    +title: ?string,
  |}
|};
export type HomeAddBookMutation = {|
  variables: HomeAddBookMutationVariables,
  response: HomeAddBookMutationResponse,
|};
*/


/*
mutation HomeAddBookMutation(
  $book: AddBookInput
) {
  addBook(book: $book) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "book",
    "type": "AddBookInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "book",
        "variableName": "book"
      }
    ],
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
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeAddBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeAddBookMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "HomeAddBookMutation",
    "id": null,
    "text": "mutation HomeAddBookMutation(\n  $book: AddBookInput\n) {\n  addBook(book: $book) {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9cbde3e128a011a610a2551c88ac9dde';

module.exports = node;
