import PropTypes from 'prop-types';
import React from 'react';

export class Radio extends React.Component {
  render() {
    const {name, selectedValue, onChange, isrequired} = this.context.radioGroup;
    const optional = {};
    if(selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.value);
    }

    if(isrequired) {
      optional.required = 'required';
    }

    return (
      <input
        {...this.props}
        role="radio"
        aria-checked={optional.checked}
        type="radio"
        name={name}
        {...optional} />
    );
  }
};

Radio.contextTypes = {
  radioGroup: PropTypes.object
};

export class RadioGroup extends React.Component {
  getChildContext() {
    const {name, selectedValue, onChange, isrequired} = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange, isrequired
      }
    }
  }

  render() {
    const {Component, name, selectedValue, onChange, children, ...rest} = this.props;
    return <Component role="radiogroup" {...rest}>{children}</Component>;
  }
};

RadioGroup.defaultProps = {
  Component: "div"
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  isrequired: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ])
};

RadioGroup.childContextTypes = {
  radioGroup: PropTypes.object
};
