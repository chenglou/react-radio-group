import React, {Component} from 'react';
import RadioContext from 'RadioContext';

/**
 * @type {RadioButton}
 */
const RadioButton = class RadioButton extends Component {
    static contextTypes = RadioContext;
    static displayName = 'RadioButton';

    static defaultProps = {
        useHiddenInput: false,
        className: '',
        type: 'button',
    };

    static propTypes = {
        children: React.PropTypes.node,
        useHiddenInput: React.PropTypes.bool,
        className: React.PropTypes.string,
        type: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    // region Getters
    /**
     * @returns {Boolean}
     */
    get isSelected() {
        return this.context.selectedValue === this.props.value;
    }

    /**
     * @returns {String}
     */
    get className() {
        let className = this.props.className;
        if (this.isSelected) {
            className += ' active';
        }
        return className;
    }

    /**
     * @returns {Object}
     */
    get buttonProps() {
        const {radioGroup, children, useHiddenInput, className, ...rest} = this.props;

        return Object.assign({
            onClick: () => this.context.onChange(rest.value),
        }, rest);
    }

    // endregion

    // region Renders
    renderInput() {
        if (!this.props.useHiddenInput || !this.isSelected) {
            return null;
        }
        return (
            <input
                type="hidden"
                name={this.context.name}
                value={this.props.value}
            />
        );
    }

    render() {
        return (
            <button className={this.className} {...this.buttonProps}>
                {this.renderInput()}
                {this.props.children}
            </button>
        );
    }

    // endregion
};

export default RadioButton;