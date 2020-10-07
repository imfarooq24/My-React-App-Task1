import React from 'react';

const UserInput = (props) => {
    const inlineStyle={
        border: '2px solid black'
    };
    return (
        <div>
            <input style={inlineStyle} onChange={props.inputName} type="text"/>
        </div>
    )
}

export default UserInput;