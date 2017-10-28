import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

var iface = {
    name: 'PTView',
    propTypes: {
      FontColor: PropTypes.number,
      Text: PropTypes.string,
      ...View.propTypes // include the default view properties
    },
  };

module.exports = requireNativeComponent('PTView', iface)