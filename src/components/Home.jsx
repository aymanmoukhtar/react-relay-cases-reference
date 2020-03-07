import React from 'react';
import { commitMutation, graphql, QueryRenderer } from 'react-relay';

import environment from '../relay.environment';
import Books from './Books';

const addBookMutation = graphql`
  mutation HomeAddBookMutation($book: AddBookInput) {
    addBook(book: $book) {
        id
        title
    }
  }
`;

let lastId = 5;

const addBook = () => {
  const variables = {
    book: {
      id: `Id ${++lastId}`,
      title: `Newly Added ${lastId}!`
    }
  };

  commitMutation(
    environment,
    {
      mutation: addBookMutation,
      variables
    }
  );
};

const Home = () => {
  return <QueryRenderer
    environment={environment}
    query={graphql`
    query HomeQuery {
      allBooks {
        ...Books_books
      }
    }
    `}
    render={({ props }) => {
      if (!props) {
        return <div>Loading</div>;
      }

      return (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
          <div>
            <h1>Hello, GraphQL!</h1>
            <Books books={props.allBooks} />
          </div>
          <button onClick={addBook} style={{ height: 30 }}>Add Book</button>
        </div>
      );
    }}
  />
};

export default Home;