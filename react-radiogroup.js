/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({displayName: 'RadioGroup',
  getInitialState: function() {
    // defaultValue/value can be used to initialize the selected property
    return { value: this.props.value || this.props.defaultValue };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      value: nextProps.value
    });
  },

  render: function() {
    var children = React.Children.map(this.props.children, this.getRadios, this);

    return this.transferPropsTo(
      React.DOM.div(null, 
        children
      )
    );
  },

  getRadios: function(child) {
    if(child.type === React.DOM.input.type && child.props.type === 'radio') {
      child = this.cloneRadio(child);
    } else {
      if(child.props.children) {
        child = React.addons.cloneWithProps(child, {
          children: React.Children.map(child.props.children, this.getRadios, this)
        });
      }
    }
    return child;
  },

  cloneRadio: function(radio) {
    var newProps = {};
    // stay DRY and don't put the same `name` on all radios manually. Put it on
    // the tag and it'll be done here
    newProps.name = this.props.name;

    if(radio.props.value == this.state.value) {
      newProps.checked = true;
    }

    newProps.onChange = this.setCheckedRadio.bind(this, radio.props.value);
    newProps.required = this.props.required || 'false';

    radio = React.addons.cloneWithProps(radio, newProps);

    return radio;
  },

  setCheckedRadio: function(value, e) {
    this.setState({value: value }, (function() {
      this.props.onChange && this.props.onChange(e)
    }).bind(this));

    e.stopPropagation();
  },

  getCheckedValue: function() {
    return this.state.value;
  }

});
