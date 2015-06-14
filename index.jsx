'use strict';

let React = require('react');
let p = React.PropTypes;

function radio(name, selectedValue, onChange) {
  return React.createClass({
    render: function() {
      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          checked={this.props.value === selectedValue}
          onChange={onChange.bind(null, this.props.value)} />
      );
    }
  });
}

let RadioGroup = React.createClass({
  propTypes: {
    name: p.string,
    selectedValue: p.oneOfType([p.string, p.number]),
    onChange: p.func,
    children: p.func,
  },

  render: function() {
    let {name, selectedValue, onChange, children} = this.props;
    return (
      <div>
        {children && children(radio(name, selectedValue, onChange))}
      </div>
    );
  }
});

module.exports = RadioGroup;
