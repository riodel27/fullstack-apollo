import React, { useState } from 'react'
import {Button,Form ,} from 'semantic-ui-react'
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

/**custom hook */
import {useForm} from '../util/hooks'

function Register(props){
	const [errors,setErrors] = useState({})

	const {onChange,onSubmit,values} = useForm(registerUser, {
		username:"",
		email:"",
		password:"",
		confirmPassword:""
	})

	const [addUser,{loading}] = useMutation(REGISTER_USER,{
		update(_,result){
			console.log(result)
			props.history.push('/')
		},
		onError(err){
			console.log(err.graphQLErrors[0].extensions.exception.errors)
			setErrors(err.graphQLErrors[0].extensions.exception.errors)
		},
		variables : values
	})

	function registerUser(){
		addUser()
	}

	return (
		<div className="form-container">
			<Form onSubmit={onSubmit}  className={loading ? 'loading' : ''}>
			<h1>Register</h1>
			<Form.Input 
				label="Username"
				placeholder="Username"
				name="username"
				value={values.username}
				onChange={onChange}
				type= "text"
				error={errors.username ? true : false}
			/>
			<Form.Input 
				label="Email"
				placeholder="Email"
				name="email"
				value={values.email}
				onChange={onChange}
				type= "email"
				error={errors.email ? true : false}
			/>
			<Form.Input 
				label="Password"
				placeholder="Password"
				name="password"
				value={values.password}
				onChange={onChange}
				error={errors.password ? true : false}
				type= "password"
			/>
			<Form.Input 
				label="ConfirmPassword"
				placeholder="ConfirmPassword"
				name="confirmPassword"
				value={values.confirmPassword}
				onChange={onChange}
				type= "password"
				error={errors.confirmPassword ? true : false}
			/>
			<Button type="submit" primary>
				Register
			</Button>
		</Form>
			{Object.keys(errors).length > 0 && (
				<div className="ui error message">
					<ul className="list">
						{
							Object.values(errors).map(value => (
								<li key={value}>{value}</li>
							))
						}
					</ul>
				</div>
			)}
		</div>
	)
}

	const REGISTER_USER = gql`
		mutation register(
			$username : String!
			$email : String!
			$password : String!
			$confirmPassword : String!
		) {
			register(
				registerInput: {
					username : $username
					email : $email
					password : $password
					confirmPassword : $confirmPassword
				}
			){
				id email username createdAt token
			}
		}
	`

export default Register