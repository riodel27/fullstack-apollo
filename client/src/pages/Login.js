import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

import { Button, Form, Message } from 'semantic-ui-react'

const LOGIN_USER = gql`
  mutation login($username: String! $password: String!) {
    login(username:$username password:$password) {
			username
			token
		}
  }
`;

const Login = () => {

	const [login, {error,data}] = useMutation(LOGIN_USER)
	const [username,setUserName] = useState('')
	const [password,setPassword] = useState('')		

	const onSubmit = async () => {	
		login({variables:{
			username,
			password
		}})
	}

	// error && console.log('error: ', JSON.stringify(error))

	return (
		<Form error onSubmit={onSubmit} >
					{error ? <Message
      								error
      								header={error.message}
     								  content={error.graphQLErrors[0].extensions.code}
										/>	 
										:
										null
					}
					{data && <h1>user: {data.login.username}</h1>}
					<Form.Field>
						<label>Name</label>
						<input type="text" name="username" onChange={(e) => setUserName(e.target.value)}/>
					</Form.Field>
					<Form.Field>
						<label>Password</label>
						<input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
					</Form.Field>
					<Button type='submit' value='submit'>Submit</Button>
		</Form>
	)
}

export default Login