import React from 'react';

const TextArea = (props) => {

  return (
    <div class="textA">
      <h2>Editor for content</h2>
      <p>You can change a content of box on left side in textarea below.</p>
      <p>Use markdown syntax to format your content.</p>
      <textarea id="editor" rows="30" value={props.textareaValue} onChange={props.updateTextareaValue}>{props.textareaValue}</textarea>
   </div>
  )
}

export default TextArea;