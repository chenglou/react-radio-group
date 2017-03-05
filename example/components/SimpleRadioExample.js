import React, {Component} from 'react';
import {RadioGroup, Radio} from 'index.jsx';

const SimpleRadioExample = class SimpleRadioExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'apple',
        }
    }

    handleChange = (selectedValue) => {
        this.setState({selectedValue});
    };

    render() {
        return (
            <div>
                <h2>Example with native radio buttons</h2>
                <h4>Fruits:</h4>
                <RadioGroup
                    name="fruit"
                    selectedValue={this.state.selectedValue}
                    onChange={this.handleChange}>
                    <label>
                        <Radio value="apple"/>Apple
                    </label>
                    <label>
                        <Radio value="orange"/>Orange
                    </label>
                    <label>
                        <Radio value="watermelon"/>Watermelon
                    </label>
                </RadioGroup>
                <small>You have choose: {this.state.selectedValue}</small>
            </div>
        );
    }
};

export default SimpleRadioExample; 