import React, { Component } from 'react';
import UserInput from './components/UserInput';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <p>{this.props.store.users}</p>
      </div>
    );
  }
};

export default App;
