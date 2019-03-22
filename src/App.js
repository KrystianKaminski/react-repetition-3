import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'

class App extends Component {

  state = {
    text: ''
  }

  onInputTextChangeHandler = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  deleteSingleChartHandler = (id) => {
    const copyOfTheState = [...this.state.text]
    copyOfTheState.splice(id, 1)
    const final = copyOfTheState.join('')
    this.setState({
      text: final
    })
  }

  render() {
    const chars = [...this.state.text]

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
        <div>
          {
            chars.map((char, index) => {
              return (
                <CharComponent
                  char={char}
                  key={index}
                  click={() => this.deleteSingleChartHandler(index)}
                />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
