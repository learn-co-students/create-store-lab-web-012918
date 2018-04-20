import React, { Component } from 'react';

class UserInput extends Component {
  constructor() {
    super()

    this.state = {
      username: "",
      hometown: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
          <input name="username" onChange={this.handleChange}/>
          <input type="text" name="hometown" onChange={this.handleChange}/>
          <button type="submit" onChange={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
};

export default UserInput;
