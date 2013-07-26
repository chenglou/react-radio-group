/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({
  componentDidMount: function() {
    this.setCheckedRadio();
  },

  componentDidUpdate: function() {
    this.setCheckedRadio();
  },

  render: function() {
    this.getRadios().forEach(function(radio) {
      radio.props.name = this.props.name;
    }, this);

    return this.transferPropsTo(
      <div>
        {this.props.children}
      </div>
    );
  },

  getRadios: function() {
    return this.props.children.filter(function(child) {
      return child.props && child.props.type === 'radio';
    }, this);
  },

  setCheckedRadio: function() {
    this.getRadios().forEach(function(radio) {
      var $radio = radio.getDOMNode();
      if ($radio.value === this.props.checkedValue) {
        $radio.setAttribute('checked', 'true');
      } else {
        $radio.removeAttribute('checked');
      }
    }, this);
  },

  getCheckedValue: function() {
    var checkedRadio = this.getRadios().filter(function(radio) {
      return radio.getDOMNode().getAttribute('checked') === 'true';
    });

    return checkedRadio[0].props.value;
  }
});

var Demo = React.createClass({
  render: function() {
    return (
      <RadioGroup name="fruits" checkedValue="orange" ref="radioGroup">
        <input type="radio" value="apple" defaultChecked/>Apple
        <input type="radio" value="orange"/>Orange
        <input type="radio" value="watermelon"/>Watermelon
      </RadioGroup>
    );
  },

  moreDemo: function() {
    var selectedValue = this.refs.radioGroup.getCheckedValue();
    console.log(selectedValue);
  }
});

var demo = <Demo/>;

React.renderComponent(demo, document.body)

demo.moreDemo();

