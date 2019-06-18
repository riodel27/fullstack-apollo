import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const USERS = gql`
	{
		users{
			username
			id
		}
	}
`

function Home(){
	const { loading, data: {users} } = useQuery(USERS);
	users && console.log('users: ', JSON.stringify(users,null,2))
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}

export default Home