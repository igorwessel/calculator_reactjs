import React from 'react';
import Display from './Display';
import Button from './Button';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...initialState };
        this.clearMemory = this.clearMemory.bind(this)
        this.addDigit = this.addDigit.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.clearDisplayValue = this.clearDisplayValue.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    clearDisplayValue() {
        this.setState({ displayValue: '0' })
    }

    setOperation(operation) {
        const current = this.state.current
        if (current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]

            switch (currentOperation) {
                case '+':
                    values[0] = values[0] + values[1]
                    values[1] = 0
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    values[1] = 0
                    break
                case '/':
                    values[0] = values[0] / values[1]
                    values[1] = 0
                    break
                case '%':
                    values[0] = (values[0] / 100) * values[1]
                    values[1] = 0
                    break
                case '*':
                    values[0] = values[0] * values[1]
                    values[1] = 0
                    break
            }

            this.setState({
                values,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                displayValue: values[0],
                clearDisplay: !equals,
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({
            displayValue,
            clearDisplay: false
        })

        if (n !== '.' && n !== '%' && n !== '(' && n !== ')') {
            const index = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[index] = newValue
            this.setState({ values })
        }
    }

    render() {

        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='0' click={this.addDigit} />
                <Button label='AC' operation click={this.clearMemory} />
                <Button label='%' operation click={this.setOperation} />
                <Button label='+' operation click={this.setOperation} />
                <Button label='-' operation click={this.setOperation} />
                <Button label='*' operation click={this.setOperation} />
                <Button label='/' operation click={this.setOperation} />
                <Button label='.' operation click={this.addDigit} />
                <Button label='C' operation click={this.clearDisplayValue} />
                <Button label='=' operation click={this.setOperation} />
            </div>
        );
    }
};