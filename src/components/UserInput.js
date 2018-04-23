import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hometown: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.name === 'username' ? e.target.value : this.state.username,
      hometown: e.target.name === 'hometown' ? e.target.value : this.state.hometown
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch( {type: 'ADD_USER', user: {username: this.state.username, hometown: this.state.hometown} } )
    this.setState({username: '', hometown: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.username} onChange={this.handleChange} name="username" type="text" placeholder="username" />
          <input value={this.state.hometown} onChange={this.handleChange} name="hometown" type="text" placeholder="hometown" />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput


 