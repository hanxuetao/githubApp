/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import WelcomePage from './src/pages/WelcomePage';
import AppNavigators from './src/navigators/AppNavigators';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigators);
