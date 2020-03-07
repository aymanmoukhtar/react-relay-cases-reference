import React, { useEffect } from 'react';
import { createFragmentContainer, requestSubscription } from "react-relay";
import { ConnectionHandler } from 'relay-runtime';

import environment from '../relay.environment';
import Book from "./Book";

const subscription = graphql`
  subscription BooksBookAddedSubscription {
      onBookAdded {
          id
          title
        }
    }
`;

const Books = ({ books }) => {
    useEffect(() => {
        requestSubscription(
            environment,
            {
                subscription,
                variables: {},
                updater: store => {
                    const newBook = store.getRootField('onBookAdded');
                    const allBooksRecord = store.getRoot().getLinkedRecord('allBooks');
                    const newBookEdge = ConnectionHandler.createEdge(
                        store,
                        allBooksRecord,
                        newBook,
                        'BookEdge'
                    );
                    ConnectionHandler.insertEdgeAfter(allBooksRecord, newBookEdge);
                }
            }
        );
    }, []);

    return (
        <ul>
            {books.edges.map(({ node }) => {
                return <Book key={node.id} book={node} />
            })}
        </ul>
    );
};

export default createFragmentContainer(Books, {
    books: graphql`
        fragment Books_books on BookConnection {
            edges {
                node {
                    id
                    ...Book_book
                }
            }
        }
    `
});