import React, {Component, PropTypes} from 'react';
import RadioContext from 'RadioContext';

const RadioGroup = class RadioGroup extends Component {
    static displayName = 'RadioGroup';

    static childContextTypes = RadioContext;

    static defaultProps = {
        Component: 'div',
    };

    static propTypes = {
        name: PropTypes.string,
        selectedValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        onChange: PropTypes.func,
        children: PropTypes.node.isRequired,
        Component: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func,
            PropTypes.object,
        ])
    };

    getChildContext() {
        const {name, selectedValue, onChange} = this.props;
        return {name, selectedValue, onChange};
    }

    render() {
        const {
            Component,
            name,
            selectedValue,
            onChange,
            children,
            ...rest,
        } = this.props;

        return <Component {...rest}>{this.props.children}</Component>;
    }
};


export default RadioGroup;