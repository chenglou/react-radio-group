import React, {Component} from 'react';
import {Radio, RadioGroup, RadioButton} from 'index';

const CustomButtonWithInputExample = class CustomButtonWithInputExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'PHP',
        }
    }

    get name() {
        return 'language';
    }

    handleClick = () => {
        const formData = new FormData(document.querySelector('#example-form'));
        alert(formData.get('language'));
    };

    handleValueChange = (selectedValue) => {
        this.setState({selectedValue});
    };

    render() {
        return (
            <form id="example-form">
                <h2>Example with custom buttons and hidden inputs</h2>
                <button type="button" onClick={this.handleClick}>Get form value</button>
                <h4>Programming languages:</h4>
                <RadioGroup
                    name={this.name}
                    selectedValue={this.state.selectedValue}
                    onChange={this.handleValueChange}
                >
                    <label>
                        <Radio value="None"/>None
                    </label>
                    <RadioButton value="PHP" className="radio-button" useHiddenInput={true}>
                        PHP
                    </RadioButton>
                    <RadioButton value="JS" className="radio-button" useHiddenInput={true}>
                        JS
                    </RadioButton>
                    <RadioButton value="Python" className="radio-button" useHiddenInput={true}>
                        Python
                    </RadioButton>
                </RadioGroup>
                <small>You choose {this.state.selectedValue}</small>
            </form>
        )
    }
};

export default CustomButtonWithInputExample; 