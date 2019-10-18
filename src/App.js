import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: ''
    }
  }

  updateTextareaValue = (e) => {
    this.setState({
      textareaValue: (e.target.value)
    });
  }

  render(){
    let { textareaValue } = this.state;
    return (
      <div className="App">
        <textarea id="editor" value={textareaValue} onChange={this.updateTextareaValue}></textarea>
        <div id="preview">{marked(textareaValue)}</div>
      </div>
    )
  } 
}

export default App;
