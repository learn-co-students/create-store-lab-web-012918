import React, { Component } from 'react';

class UserInput extends Component {
  state = {username: '', hometown: ''}
  handleOnSubmit = (e) => {
    e.preventDefault()

    this.props.store.dispatch({
    type: 'ADD_USER',
    user: this.state
      }
    )
  }

  handleOnChange = (e) => {
    // console.log(this.state)
    this.state = {...this.state, [e.target.name]: e.target.value}
    // this.state[e.target.name] = {...this.state, [e.target.name] : e.target.value}

  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleOnChange} type="text" name="username" htmlFor="username" placeholder="username"></input>
        <input onChange={this.handleOnChange} type="text" name="hometown" htmlFor="hometown" placeholder="hometown"></input>
        <button>Submit</button>
      </form>
      </div>
    );
  }
};

export default UserInput;
