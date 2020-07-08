/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/screens/Login/Login'
import SignUp from './src/screens/SignUp/SignUp'
import Test from './src/screens/Test/Test' 
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SignUp);
