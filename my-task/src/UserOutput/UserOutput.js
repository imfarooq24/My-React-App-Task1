import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>hello</p>
            <p>{props.name}</p>
        </div>
    )
}

export default UserOutput;