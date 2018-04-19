import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: "",
    hometown: ""
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: this.state
    })
  }

  render() {
    return(
      <div>
        {/* <form onSubmit={this.handleSubmit}> */}
        <form onSubmit={() => this.props.store.dispatch({ type: "ADD_USER", user: this.state })}>
          <input onChange={this.handleChange} type="text" name="username" />
          <input onChange={this.handleChange} type="text" name="hometown" />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
