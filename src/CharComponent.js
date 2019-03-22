import React from 'react'

const style = {
    char: {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
}

const CharComponent = (props) => {
    return (
        <div
            style={style.char}
        >
            he
        </div>
    )
}

export default CharComponent