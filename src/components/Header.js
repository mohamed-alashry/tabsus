import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


import colors from '../assets/colors'
import { StackActions } from '@react-navigation/native';

class Header extends React.Component {
    render() {
        const { title, showBack, showMenu, showExit } = this.props
        return (
            <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 70, flexDirection: 'row', backgroundColor: this.props.transparent ? 'transparent' : 'black' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        showBack &&

                        <TouchableOpacity
                            //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                            style={{ marginHorizontal: 10 }}>
                            <Ionicons
                                name='chevron-back'
                                color="white"
                                size={20}
                            />
                        </TouchableOpacity>

                    }
                    {
                        showMenu &&
                        <TouchableOpacity
                        onPress={() => this.props.props.props.navigation.dispatch(DrawerActions.openDrawer())}
                            style={{ marginHorizontal: 10 }}>
                            <Ionicons
                                name='menu'
                                color="white"
                                size={20}
                            />
                        </TouchableOpacity>
                    }
                    {
                        showExit &&
                        <TouchableOpacity
                            //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                            style={{ marginHorizontal: 10 }}>
                            <Ionicons
                                name='close'
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>
                    }
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                        style={{ marginHorizontal: 10 }}>
                        <Fontisto
                            name='bell'
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                        style={{ marginHorizontal: 5 }}>
                        <Fontisto
                            name='search'
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                        style={{ marginHorizontal: 10 }}>
                        <Ionicons
                            name='cart-outline'
                            color="white"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>

            </View >
        );
    };
}

const styles = StyleSheet.create({

});

export default Header;
