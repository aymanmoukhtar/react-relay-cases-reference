import React, { useEffect } from 'react';
import { createFragmentContainer } from "react-relay";

import Book from "./Book";

const Books = ({ books }) => {
    useEffect(() => {
        
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