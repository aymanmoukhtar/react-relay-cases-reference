import React, { useEffect } from 'react';
import { commitMutation, graphql, QueryRenderer, requestSubscription } from 'react-relay';

import environment, { connectionUpdater } from '../relay.environment';
import Books from './Books';

const bookAddedSubscription = graphql`
  subscription HomeBookAddedSubscription {
      onBookAdded {
          id
          title
        }
    }
`;

const addBookMutation = graphql`
  mutation HomeAddBookMutation($book: AddBookInput) {
    addBook(book: $book) {
        id
        title
    }
  }
`;

const getRandomId = () => Math.random().toString(36).substr(2, 5);

const addBook = () => {
  const id = getRandomId();

  const variables = {
    book: {
      id: `Id ${id}`,
      title: `Newly Added ${id}!`
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

const HomeRenderer = () => {
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

      return <Home allBooks={props.allBooks} />;
    }}
  />
};

const Home = ({ allBooks }) => {
  useEffect(
    () => {
      requestSubscription(
        environment,
        {
          subscription: bookAddedSubscription,
          variables: {},
          updater: connectionUpdater('onBookAdded', 'allBooks')
        }
      );
    },
    []
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center' }}>
      <div>
        <h1>Hello, GraphQL!</h1>
        <Books books={allBooks} />
      </div>
      <div>
        <h1>Hello, GraphQL!</h1>
        <Books books={allBooks} />
      </div>
      <button onClick={addBook} style={{ height: 30 }}>Add Book</button>
    </div>
  );
};

export default HomeRenderer;