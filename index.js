/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './App';
import { name as appName } from './app.json';

// Ensure icon font is loaded (prevents missing glyphs showing as boxes)
try {
  // @ts-ignore
  Icon.loadFont();
} catch (e) {}

AppRegistry.registerComponent(appName, () => App);
