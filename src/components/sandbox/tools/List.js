import React from 'react';

const GenerateList = (props) => {
  let list = {
    marginTop: '5px'
  };
  let bolder = {
        fontWeight: '700',
        color: 'MediumSpringGreen',
    };

    return (
        <div style={list}>
            <ul>
                {props.myList.map(function (listEntry) {
                    return <li key={listEntry.property}><span style={bolder}>{listEntry.property}</span>: {listEntry.value}</li>;
                })}
            </ul>
        </div>
    );
};
export default GenerateList;
