import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  updateValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitIt = (e) =>{
    e.preventDefault()
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
    console.log(this.props.store);
    return(
      <div>
        <form onSubmit={this.submitIt}>
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
