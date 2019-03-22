import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent'

class App extends Component {

  state = {
    text: ''
  }

  onInputTextChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ValidationComponent
          textLength={this.state.text.length}
        />
        <input
          type="text"
          value={this.state.text}
          onChange={this.onInputTextChangeHandler}
        />
      </div>
    );
  }
}

export default App;
