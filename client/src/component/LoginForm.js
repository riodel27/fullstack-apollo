
import React ,{Component} from 'react'
import { Button, Form } from 'semantic-ui-react'


class LoginForm extends Component {
	// Can this be change to function component as well?
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
				<Form onSubmit={this.onSubmit}>
				<Form.Field>
					<label>Name</label>
					<input type="text" name="username" onChange={this.onChange}/>
				</Form.Field>
				<Form.Field>
					<label>Password</label>
					<input type="text" name="password" onChange={this.onChange}/>
				</Form.Field>
				<Button type='submit' value='submit'>Submit</Button>
				</Form>
    );
  }
}

export default LoginForm