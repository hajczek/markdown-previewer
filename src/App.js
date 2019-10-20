import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import text from './assets/data/text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: text
    }
  }

  convert = () => {
    var clearText = marked(this.state.textareaValue);
    return {
      __html: clearText
    };
  }

  updateTextareaValue = (e) => {
    this.setState({
      textareaValue: e.target.value
    });
  }

  render(){
    let { textareaValue } = this.state;
    return (
      <div className="App">
        <textarea id="editor" value={textareaValue} onChange={this.updateTextareaValue}>{textareaValue}</textarea>
        <span id="preview" dangerouslySetInnerHTML={this.convert()} />
      </div>
    )
  } 
}

export default App;