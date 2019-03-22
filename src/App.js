import React, { Component } from 'react';

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
        Length of the text in input field:
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
