import React, {Component, PropTypes} from 'react';
import RadioContext from 'RadioContext';

const Radio = class Radio extends Component {

    static displayName = 'Radio';
    static contextTypes = RadioContext;

    constructor(props) {
        super(props);
    }

    render() {
        const {name, selectedValue, onChange} = this.context;
        const optional = {};
        if (selectedValue !== undefined) {
            optional.checked = (this.props.value === selectedValue);
        }
        if (typeof onChange === 'function') {
            optional.onChange = onChange.bind(null, this.props.value);
        }

        return (
            <input
                {...this.props}
                type="radio"
                name={name}
                {...optional} />
        );
    }
};

export default Radio; 