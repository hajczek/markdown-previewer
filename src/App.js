import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue: "Top title\n=======\n\nYou can make top title by set ============== below the text which you want to be a top title\n\nSubtitle\n-----------\n\nYou can make subtitle by set ---------------- below the text which you want to be a Subtitle \n\n### Next deeper title\n\nYou can make next deeper title by using this sentence of signs ### before the text\n\n**Break Line**\n\nFor break line you must use this sign \\ and after that set letter 'n' without space\n\n**Attributes for formatting text**\n\nYou can use these attributes for text: *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nFor italic text you must use this sign * before and after word/text without space\n\nFor bold text you must use this two sign ** before and after word/text without space\n\nFor monosopace text you must use this sign ` before and after word/text without space\n\nFor strikethrough text you must use these two sign ~~ before and after word/text without space\n\nHere is some code block: ``This text is in `code` element now``.\n\n For set some text in code element, you must use this two signs `` after and before word/text, without space\n\n**Counted list**\n\n  1. bread\n  2. butter\n  3. milk\n\nFor making counted list you must use numbers and points before text and line break after text\n\n**Uncounted list**\n\n  * Jhon\n  * Danny\n  * Marry\n\nFor making uncounted list use this sign * and one space before text and line break after text\n\n**Graphic file**\n\n\n![Some render picture](https://picsum.photos/600/300?grayscale 'Some render picture from Lorem picsum')\n\nFor add picture you must use this combination, without spaces:\n\n ! [ Title of photo for alt attribute] ( Link to photo 'Title of photo for title attribute' )\n\n**Linked email:**\n\n<fake@example.com>\n\nFor that you must use this sign < at the beginning of email address and this sign > at the end, without space.\n\n**Link:**\n\n[This is link to my portfolio website :)](https://hajczek.github.io/portfolio/)\n\nFor that you must use these signs: [ ], and inside them put text which will be a title of link. Then inside these () put url address for this link.\n\n\n***Happy marked!!!***"
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