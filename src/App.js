import React, { Component } from 'react';
import './assets/css/styles.css';
import './assets/css/normalize.css';
import marked from 'marked';
import text from './assets/data/text';
import Header from './components/Header';
import TextArea from './components/TextArea';
import Preview from './components/Preview';

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
        <Header />
        <div class="content">
          <Preview
            dangerouslySetInnerHTML={this.convert()} 
          />
          <TextArea 
            textareaValue = {textareaValue}
            updateTextareaValue = {this.updateTextareaValue}
          />
        </div>
      </div>
    )
  } 
}

export default App;