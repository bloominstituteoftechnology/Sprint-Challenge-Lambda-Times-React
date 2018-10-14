/*import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: ''
    }
  }

  handleFormChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('user', this.state.user)
    localStorage.setItem('password', this.state.password)
    this.setState({ user: '', password: '' })
    window.location.reload(true)
  }

  render () {
    return (
      <Form inline onSubmit={this.handleFormSubmit}>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='exampleEmail' className='mr-sm-2'>
            Username
          </Label>
          <Input
            type='text'
            name='user'
            placeholder='username ...'
            onChange={this.handleFormChange}
            value={this.state.user}
          />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='examplePassword' className='mr-sm-2'>
            Password
          </Label>
          <Input
            type='password'
            name='password'
            placeholder='password ...'
            value={this.state.password}
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <Button color='primary'>Submit</Button>
      </Form>
    )
  }
}*/
