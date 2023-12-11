/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { MainNavigation } from './src/screen/navigation/Navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainNavigation);
