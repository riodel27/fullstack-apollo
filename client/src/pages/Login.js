import React, { useState } from 'react'
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

import { Button, Form } from 'semantic-ui-react'
	
const LOGIN_USER = gql`
  mutation login($username: String! $password: String!) {
    login(username:$username password:$password) {
			username
			token
		}
  }
`;

const Login = () => {

	const [login] = useMutation(LOGIN_USER)
	const [username,setUserName] = useState('')
	const [password,setPassword] = useState('')		

	const onSubmit = async () => {	
		const response = await login({variables:{
			username,
			password
		}})
		console.log('response: ' ,response)
	}

	return (
		<Form onSubmit={onSubmit}>
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