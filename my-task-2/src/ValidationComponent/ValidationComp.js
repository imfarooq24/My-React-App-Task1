import React from 'react';

const ValidationComp = (props) => {
    let validationText ="Text long enough";
    if(props.inputLength<=5){
        validationText="Text is short";
    }
    return (
        <div>
            {
                <p> {validationText} </p>

                // props.inputLength >5?
                // <p>text is long enough</p> :
                // <p>text is short</p>
            }
        </div>
    );
}

export default ValidationComp;