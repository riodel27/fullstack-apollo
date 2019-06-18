import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";
import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from '@apollo/react-hooks'
// import { ApolloProvider } from 'react-apollo';
import App from './App'


const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:5000'
  })
});

ReactDOM.render(
<ApolloProvider client={client}>
	<App />
</ApolloProvider>,
document.getElementById('root'),
);