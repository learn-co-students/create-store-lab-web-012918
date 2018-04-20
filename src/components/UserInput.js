import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleInputField = (event) =>  {
    let field = event.target.name
    this.setState({
      [field]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Username: </p>
          <input type='text' name='username' onChange={this.handleInputField} />
          <p>Hometown: </p>
          <input type='text' name='hometown' onChange={this.handleInputField} />
          <br/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;
