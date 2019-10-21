import React, { Component } from 'react';
import './App.css';
import './normalize.css';
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
        <div class="header">
          <h1>Markdown Previewer</h1>
        </div>
        <div class="content">
          <span id="preview" dangerouslySetInnerHTML={this.convert()} />
          <div class="textA">
            <h2>Editor for content</h2>
            <p>You can change a content of box on left side in textarea below.</p>
            <p>Use markdown syntax to format your content.</p>
            <textarea id="editor" rows="30" value={textareaValue} onChange={this.updateTextareaValue}>{textareaValue}</textarea>
          </div>
        </div>
      </div>
    )
  } 
}

export default App;