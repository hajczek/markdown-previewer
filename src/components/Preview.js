import React from 'react';

const Preview = (props) => {

  return (
    <span id="preview" dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} />
  )
}

export default Preview;