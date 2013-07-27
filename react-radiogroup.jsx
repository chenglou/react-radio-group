/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({
  componentDidMount: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  componentDidUpdate: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  render: function() {
    return this.transferPropsTo(
      <div onChange={this.handleChange}>
        {this.props.children}
      </div>
    );
  },

  setRadioNames: function() {
    // stay DRY and don't put the same `name` on all radios manually. Put it on
    // the tag and it'll be done here
    var $radios = this.getRadios();
    for (var i = 0, length = $radios.length; i < length; i++) {
      $radios[i].setAttribute('name', this.props.name);
    }
  },

  getRadios: function() {
    return this.getDOMNode().querySelectorAll('input[type="radio"]');
  },

  setCheckedRadio: function(forcedValue) {
    // by default, check the radio whose value is provided by `value` from
    // parent. This method also doubles as a hard radio setter if forcedValue is
    // passed (see `handleChange`).
    var valueToChangeTo = forcedValue ? forcedValue : this.props.value;
    var $radios = this.getRadios();

    for (var i = 0, length = $radios.length; i < length; i++) {
      var $radio = $radios[i];
      if ($radio.value === valueToChangeTo) {
        $radio.checked = true;
      }
    }
  },

  getCheckedValue: function() {
    var $radios = this.getRadios();

    for (var i = 0, length = $radios.length; i < length; i++) {
      if ($radios[i].checked) {
        return $radios[i].value;
      }
    }

    return null;
  },

  handleChange: function(event) {
    this.setCheckedRadio(event.target.value);
    this.props.onChange && this.props.onChange();
  }
});

