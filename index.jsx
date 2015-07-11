import React, {PropTypes} from 'react';

const Radio = React.createClass({
  render() {
    return (
      <input
        {...this.props}
        type="radio"
        name={this.props.name}
        checked={this.props.value === this.props.selectedValue}
        onChange={() => this.props.onChange(this.props.value)} />
    );
  }
});

const RadioGroup = React.createClass({
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    children: PropTypes.func,
  },

  render: function () {
    const {name, selectedValue, onChange, children} = this.props;
    return (
      <div>
        {children && children(props => <Radio {...{name, selectedValue, onChange}} {...props} />)}
      </div>
    );
  }
});

export default RadioGroup;
