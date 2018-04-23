import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometownChange = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(

      <div>
        <form onSubmit={this.handleSubmit}>
        Username: <input onChange={this.handleUserChange} type="text"/>
        Hometown: <input onChange={this.handleHometownChange} type="text"/>
        <input type= 'submit'/>
        </form>
      </div>
    );
  }
};

export default UserInput;
