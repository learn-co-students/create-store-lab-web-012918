import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  updateValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitUser = (event) =>{
    event.preventDefault()
    let action = {
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    }
    this.props.store.dispatch(action)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitUser}>
          Username:
          <input name='username' type='text' value={this.state.text} onChange={this.updateValue}></input><br/>
          Hometown:
          <input name='hometown' type='text' value={this.state.text} onChange={this.updateValue}></input><br/>
          <input type='submit'></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
