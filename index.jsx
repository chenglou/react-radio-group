import React, {PropTypes} from 'react';

function radio(kwargs) {

  return React.createClass({
    render: function() {
      const name = kwargs.name;

      // We only want to assign these attribute to the <input />
      // elements if they were specified explicitly.
      const optional = {};
      if(kwargs.hasOwnProperty("selectedValue")) {
        optional.checked = (this.props.value === kwargs.selectedValue);
      }
      if(kwargs.hasOwnProperty("onChange")) {
        optional.onChange = kwargs.onChange.bind(null, this.props.value);
      }

      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          {...optional} />
      );
    }
  });
}

export default React.createClass({
  propTypes: {
    name: PropTypes.string,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func,
    children: PropTypes.func.isRequired,
  },

  render: function() {
    const renderedChildren = this.props.children(radio(this.props));
    return renderedChildren && React.Children.only(renderedChildren);
  }
});
