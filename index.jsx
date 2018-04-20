import PropTypes from 'prop-types';
import React from 'react';

export class Radio extends React.Component {
  render() {
    const {Component, ...rest} = this.props;
    const {name, selectedValue, onChange} = this.context.radioGroup;
    const optional = {};
    if(selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if(typeof onChange === 'function') {
      optional.onChange = onChange.bind(null, this.props.value);
    }

    return (
      <Component
        {...this.props}
        type="radio"
        name={name}
        {...rest} />
    );
  }
};

Radio.defaultProps = {
  Component: "input"
};

Radio.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ])
};

Radio.contextTypes = {
  radioGroup: PropTypes.object
};

export class RadioGroup extends React.Component {
  getChildContext() {
    const {name, selectedValue, onChange} = this.props;
    return {
      radioGroup: {
        name, selectedValue, onChange
      }
    }
  }

  render() {
    const {Component, name, selectedValue, onChange, children, ...rest} = this.props;
    return <Component {...rest}>{children}</Component>;
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
