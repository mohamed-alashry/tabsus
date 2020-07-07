import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
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
import ProductDetails from './src/screens/ProductDetails/ProductDetails'
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
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
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
export class ROW extends React.Component {
  render() {

    const { text, goto, } = this.props
    return (
      <TouchableOpacity onPress={() => this.props.props.navigation.navigate(goto)}>
        <Text style={styles.drawerText}>{text}</Text>
        <View style={styles.drawerLine}></View>
      </TouchableOpacity>
    )
  }
}
function Draw(props) {
  return (
    <View style={{ height: '100%' }}>
      <View style={{ height: 200, backgroundColor: 'black', width: '100%', paddingHorizontal: 40 }} >
        <Image style={{ width: 70, height: 90, marginTop: 20, }} resizeMode={'contain'} source={require('./src/assets/img/logo.png')}></Image>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('./src/assets/img/profile.png')} style={{ width: 35, height: 35 }} resizeMode={'contain'} />
          <Text style={{ color: 'white', fontSize: 19 }}>sdsdsdsdsdsd</Text>

        </View>

      </View>
      <ScrollView  >
        <ROW text={"NEW OFFERS"} props={props} goto={'test'}></ROW>
        <ROW text={"Gifts"} props={props} goto={'test'}></ROW>
        <ROW text={"Settings"} props={props} goto={'test'}></ROW>
        <ROW text={"Market Place"} props={props} goto={'test'}></ROW>
        <ROW text={"About Us"} props={props} goto={'test'}></ROW>
        <ROW text={"Rate us"} props={props} goto={'test'}></ROW>
        <ROW text={"Contact Us"} props={props} goto={'test'}></ROW>
        <ROW text={"Returns and Refunds"} props={props} goto={'test'}></ROW>
        <ROW text={"Feedback to Improve"} props={props} goto={'test'}></ROW>
        <ROW text={"Terms & Conditions"} props={props} goto={'test'}></ROW>
        <ROW text={"logout"} props={props} goto={'test'}></ROW>


      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  drawerText: { color: 'gray', fontSize: 18, marginVertical: 15, alignSelf: 'center' },
  drawerLine: { backgroundColor: 'gray', height: .5, width: '100%' }
});
function Root() {
  return (
    <Drawer.Navigator drawerContent={
      Draw
    }
    
    >
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}
export default App;
