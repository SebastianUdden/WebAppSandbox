import React from 'react';

const GenerateList = (props) => {
    let bolder = {
        fontWeight: '700',
        color: 'MediumSpringGreen',
    };

    return (
        <div>
            <ul>
                {props.myList.map(function (listEntry) {
                    return <li key={listEntry.property}><span style={bolder}>{listEntry.property}</span>: {listEntry.value}</li>;
                })}
            </ul>
        </div>
    );
};
export default GenerateList;