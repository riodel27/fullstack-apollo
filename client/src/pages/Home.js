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
	const { loading, error,data: {users} } = useQuery(USERS);
	// users && console.log('users: ', JSON.stringify(users,null,2))

	console.log(users)

	if (error) return <p>error</p>

	if (loading) return <p>Loading</p>

	return (
		<div>
			<h1>Home Page</h1>
		</div>
	)
}

export default Home