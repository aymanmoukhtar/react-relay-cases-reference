import React from 'react';
import { createFragmentContainer } from "react-relay";

const Book = ({ book }) => (
    <li>{book.title}</li>
);

export default createFragmentContainer(Book, {
    book: graphql`
        fragment Book_book on Book {
            title
        }
    `
});