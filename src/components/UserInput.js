import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleInputUsername = event => {
    this.setState({
      username: event.target.value
    })
  }

  handleInputHometown = event => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = event => {
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
          Username:
          <input type="text" name="username" placeholder="Username" onChange={this.handleInputUsername}></input>
          Hometown:
          <input type="text" name="hometown" placeholder="Hometown" onChange={this.handleInputHometown}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
