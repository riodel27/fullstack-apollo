import React from 'react'
import App from './App'
import ApolloClient from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks'

const link = new HttpLink({
  uri: 'http://localhost:5000/'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})


export default (
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>	
)