/**
 * @flow
 * @relayHash 77c48f9af4a41e3a0a5774e40674916b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HomeBookAddedSubscriptionVariables = {||};
export type HomeBookAddedSubscriptionResponse = {|
  +onBookAdded: ?{|
    +id: string,
    +title: ?string,
  |}
|};
export type HomeBookAddedSubscription = {|
  variables: HomeBookAddedSubscriptionVariables,
  response: HomeBookAddedSubscriptionResponse,
|};
*/


/*
subscription HomeBookAddedSubscription {
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
    "name": "HomeBookAddedSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeBookAddedSubscription",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "HomeBookAddedSubscription",
    "id": null,
    "text": "subscription HomeBookAddedSubscription {\n  onBookAdded {\n    id\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3721c3cc4b529d8afbaae5b25bf7dc9b';

module.exports = node;
