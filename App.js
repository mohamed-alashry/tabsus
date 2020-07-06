import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
import Main from './src/main';
import Home from './src/screens/Home/Home'
import Categories from './src/screens/Categories/Categories'
import Whishlist from './src/screens/Whishlist/Whishlist'
import Account from './src/screens/Account/Account'
import test from './src/screens/test'
const Drawer = createDrawerNavigator();

class App extends React.Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main" headerMode="none">
            <Stack.Screen
              name="Main"
              component={Root}
            />
            <Stack.Screen
              name="test"
              component={test}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

function Draw(props) {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ height: 140, backgroundColor: 'black' }}>
        <Image ></Image>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({});
function Root() {
  return (
    <Drawer.Navigator drawerContent={
      Draw
    }>
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>



  );
}
export default App;
