import React from 'react'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
