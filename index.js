/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Customkeyboard from './keyboard';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent('RNKeyboard', () => Customkeyboard);
