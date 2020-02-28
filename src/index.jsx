import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display';
import './index.css';

class Calculator extends React.Component {
    render() {
        return (
            <div className='Calculator'>
                <Display />
            </div>
        );
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)