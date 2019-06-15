import React, { Component } from 'react';
import { Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation login($username: String! $password: String!) {
    login(username:$username password:$password) {
			username
			token
			email
		}
  }
`;

function App(){
	return (
		<ApolloConsumer>
			{client => (
				<Mutation 
					mutation={LOGIN_USER}	
					onCompleted={({ login }) => {
						console.log('on completed login: ', login)
          }}
				>
					{(login,{data}	) =>	{
						return <LoginForm login={login}/>
					}}
				</Mutation>
			)}
		</ApolloConsumer>
	)
}


class LoginForm extends Component {
  state = { username: '' , password:''};

  onChange = event => {
		const data = {
			[`${event.target.name}`] : event.target.value
		}
	 this.setState(s => (data))
  };

  onSubmit = event => {
		event.preventDefault();
		const username = this.state.username
		const password = this.state.password
		this.props.login({ variables: { username, password}});
  };

  render() {
    return (
		<form
			onSubmit={this.onSubmit}
		>
			<label>
				Name:
				<input type="text" name="username" onChange={this.onChange}/>
			</label>
			<label>
				Password:
				<input type="text" name="password" onChange={this.onChange}/>
			</label>
				<input type="submit" value="Submit" />
		</form>
    );
  }
}

export default App;