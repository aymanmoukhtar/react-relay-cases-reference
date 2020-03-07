/**
 * @flow
 * @relayHash bd66973ee564e423db9d080ca02b291b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Books_books$ref = any;
export type HomeQueryVariables = {||};
export type HomeQueryResponse = {|
  +allBooks: ?{|
    +$fragmentRefs: Books_books$ref
  |}
|};
export type HomeQuery = {|
  variables: HomeQueryVariables,
  response: HomeQueryResponse,
|};
*/


/*
query HomeQuery {
  allBooks {
    ...Books_books
  }
}

fragment Book_book on Book {
  title
}

fragment Books_books on BookConnection {
  edges {
    node {
      id
      ...Book_book
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "HomeQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBooks",
        "storageKey": null,
        "args": null,
        "concreteType": "BookConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Books_books",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomeQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allBooks",
        "storageKey": null,
        "args": null,
        "concreteType": "BookConnection",
        "plural": false,
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "title",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomeQuery",
    "id": null,
    "text": "query HomeQuery {\n  allBooks {\n    ...Books_books\n  }\n}\n\nfragment Book_book on Book {\n  title\n}\n\nfragment Books_books on BookConnection {\n  edges {\n    node {\n      id\n      ...Book_book\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '15a41e34eba1573fc0e1e21d7c033ebb';

module.exports = node;
