import React from 'react';
import Display from './Display';
import Button from './Button';


export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            operation: ['', 0, 0]
        };
    }


    render() {
        return (
            <div className='calculator'>
                <Display value='100' />
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button label='0' />
                <Button label='+' />
                <Button label='-' />
                <Button label='*' />
                <Button label='/' />
                <Button label='C' />
                <Button label='.' />
            </div>
        );
    }
};