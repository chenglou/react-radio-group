import React, {Component} from 'react';
import {RadioGroup, RadioButton} from 'index';

const CustomRadioExample = class CustomRadioExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCar: 'BMW',
        };
    }

    get name() {
        return 'customExample';
    }

    handleCarChange = (selectedCar) => {
        this.setState({selectedCar});
    };

    render() {
        return (
            <div>
                <h2>Example with custom buttons</h2>
                <h4>Vehicles:</h4>
                <RadioGroup
                    name={this.name}
                    selectedValue={this.state.selectedCar}
                    onChange={this.handleCarChange}
                >
                    <RadioButton value="BMW" className="radio-button">
                        BMW
                    </RadioButton>
                    <RadioButton value="Mercedes" className="radio-button">
                        Mercedes-Benz
                    </RadioButton>
                    <RadioButton value="Porsche" className="radio-button">
                        Porsche
                    </RadioButton>
                </RadioGroup>
                <small>You choose {this.state.selectedCar}</small>
            </div>
        )
    }
};

export default CustomRadioExample; 