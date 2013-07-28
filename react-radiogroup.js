/**
* @jsx React.DOM
*/

var RadioGroup = React.createClass({displayName: 'RadioGroup',
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
      React.DOM.div( {onChange:this.props.onChange}, 
        this.props.children
      )
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

  setCheckedRadio: function() {
    var $radios = this.getRadios();

    for (var i = 0, length = $radios.length; i < length; i++) {
      var $radio = $radios[i];

      // intentionally use implicit conversion for those who accidentally used,
      // say, `valueToChange` of 1 (integer) to compare it with `value` of "1"
      // (auto conversion to valid html value from React)
      if ($radio.value == this.props.value) {
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
  }
});
