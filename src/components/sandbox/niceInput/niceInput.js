///////////////////
// Component usage
//////////////////////////////////////////////////////////

// Parent Methods
// niceInputChange(event) {
//   console.log("Child value: " + event.target.value);
// }

// Parent HTML
// <NiceInput onChange={this.niceInputChange} placeholderText={"First Name"} />

import React from 'react';
import './niceInput.scss';

const NiceInput = (props) => {
  return (
    <div className="niceInput">
      <input
        onChange={props.onChange}
        type="text"
        className="inputText"
        required />
      <span
        className="floating-label"
        style={{ color: "#5B5B5B", left: "-20vw" }}>
          {props.placeholderText}
      </span>
    </div>
  );
};
export default NiceInput;
