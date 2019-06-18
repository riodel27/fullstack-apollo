import React  from 'react'

import LoginForm from '../components/LoginForm'

// possible this Login component can be wrap with ApolloConsumer to be able to use
// the Query or Mutation from Apollo client?
function Login(){
	return (
		<div>
			<h1>Log-in to your account</h1>
			<LoginForm />
		</div>
	)
}


export default Login