/** @jsx React.DOM */
(function (name, definition){
    if (typeof define === 'function'){ // AMD
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) { // Node.js
        module.exports = definition();
    } else { // Browser
        var theModule = definition(), global = this, old = global[name];
        theModule.noConflict = function () {
            global[name] = old;
            return theModule;
        };
        global[name] = theModule;
    }
})('RadioGroup', function () {

    // return the module's API
    return React.createClass({
        displayName: 'RadioGroup',
        /**
         * Sets the initial value state based on the property value
         * @returns {{value: *}}
         */
        getInitialState: function() {
            return {
                value : this.props.value
            }
        },
        /**
         * @returns {string}
         */
        getCheckedValue: function() {
            return this.state.value;
        },
        /**
         * Event listener bound to child input[type=radio]
         * @param value
         * @param e
         */
        onChange: function(value, e) {
            this.setState({value: value }, (function() {
                this.props.onChange && this.props.onChange(e)
            }).bind(this));

            e.stopPropagation();
        },
        /**
         * Searches child.props.children for a React.DOM.input.type
         * @param child
         * @returns {*}
         */
        findRadio: function(child) {
            if(child.type === React.DOM.input.type && child.props.type === 'radio') {
                child = this.cloneRadio(child);
            } else {
                if(child.props.children) {
                    child = React.addons.cloneWithProps(child, {
                        children: React.Children.map(child.props.children, this.findRadio, this)
                    });
                }
            }
            return child;
        },
        /**
         * Clones a input[type=radio] and sets the checked property based on this.state.value
         * @param child
         * @returns {*}
         */
        cloneRadio: function(child) {
            var newProps = {};

            // dry propagate the name property to the child radio
            newProps.name = this.props.name;

            if(child.props.value == this.state.value) {
                newProps.checked = true;
            }

            newProps.onChange = this.onChange.bind(this, child.props.value);
            newProps.required = this.props.required || 'false';

            child = React.addons.cloneWithProps(child, newProps);

            return child;
        },
        /**
         * When updating the value property, keep the state in check
         * @returns {{value: *}}
         */
        componentWillReceiveProps: function(nextProps) {
            this.setState({
                value: nextProps.value
            });
        },
        render: function () {

            console.log(this.props.value, this.state.value)
            var children = React.Children.map(this.props.children, this.findRadio, this);

            return (
                React.DOM.div(null, 
                    children
                )
                );
        }
    });
});
