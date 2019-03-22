import React from 'react'

const ValidationComponent = (props) => {

    let validation;

    if (props.textLength < 5) {
        validation = 'text too short'
    } else if (props.textLength >= 5 && props.textLength <= 15) {
        validation = 'text is ok'
    } else if (props.textLength > 15) {
        validation = 'text too long'
    }

    return (
        <div>
            Length of the text in input field: {props.textLength}
            <div>{validation}</div>
        </div>
    )
}

export default ValidationComponent