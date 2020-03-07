/**
 * @flow
 * @relayHash fccc8b89d6a4b4da754ac316f1b995c5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BooksBookAddedSubscriptionVariables = {||};
export type BooksBookAddedSubscriptionResponse = {|
  +onBookAdded: ?{|
    +id: string,
    +title: ?string,
  |}
|};
export type BooksBookAddedSubscription = {|
  variables: BooksBookAddedSubscriptionVariables,
  response: BooksBookAddedSubscriptionResponse,
|};
*/


/*
subscription BooksBookAddedSubscription {
  onBookAdded {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "onBookAdded",
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
    "name": "BooksBookAddedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BooksBookAddedSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "BooksBookAddedSubscription",
    "id": null,
    "text": "subscription BooksBookAddedSubscription {\n  onBookAdded {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0f50098ae0a389eb9adca01c69d865b7';

module.exports = node;
