import React from 'react';
/**
 * Created by horat1us on 3/5/17.
 */
export default {
    name: React.PropTypes.string,
    selectedValue: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    onChange: React.PropTypes.func
};