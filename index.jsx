import React, {PropTypes} from 'react';

export class Radio extends React.Component {
  static displayName = 'Radio';

  static contextTypes = {
    radioGroup: React.PropTypes.object
  };

  render() {
    const {name, selectedValue, onChange} = this.context.radioGroup;
    const optional = {};
    if(selectedValue !== undefined) {
      optional.checked = (this.props.value === selectedValue);
    }
    if(typeof onChange === 'function') {
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
}

export class RadioGroup extends React.Component {
  static displayName = 'RadioGroup';

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

  static defaultProps = {
    Component: "div"
  };

  static childContextTypes = {
    radioGroup: React.PropTypes.object
  };

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
}
