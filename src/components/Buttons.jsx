import React from 'react'

export default class Buttons extends React.Component {
    render() {
        return (
            <div className="Buttons">
                <button>7</button>
                <button>8</button>
                <button>9</button>

                <button>4</button>
                <button>5</button>
                <button>6</button>

                <button>1</button>
                <button>2</button>
                <button>3</button>

                <button>0</button>
                <button>.</button>
                <button>=</button>
                <button>C</button>

                <button>+</button>
                <button>-</button>
                <button>÷</button>
                {/* <button>x</button> */}
            </div>
        );
    }
}