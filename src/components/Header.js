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
import { DrawerActions } from '@react-navigation/native';


import colors from '../assets/colors'
import { StackActions } from '@react-navigation/native';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { title, showBack, showMenu, showExit, hideSearch, transparent ,hideBell ,hideCart } = this.props
        const color = this.props.transparent ? "black" : "white"
        return (
            <View style={{ justifyContent: 'space-between', alignItems: 'center', height: 70, flexDirection: 'row', backgroundColor: transparent ? '#F4F5F8' : 'black' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        showBack &&
                        <TouchableOpacity
                            onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                            style={{ marginHorizontal: 10 }}>
                            <Ionicons
                                name='chevron-back'
                                color={color}
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
                                color={color}
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
                                color={color}
                                size={25}
                            />
                        </TouchableOpacity>
                    }
                    <Text style={{ fontSize: 20, color: color, fontWeight: 'bold' }}>{title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                {!hideBell && 
                    <TouchableOpacity
                        //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                        style={{ marginHorizontal: 10 }}>
                        <Fontisto
                            name='bell'
                            color={color}
                            size={25}
                        />
                    </TouchableOpacity> }
                    {!hideSearch && <TouchableOpacity
                        //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                        style={{ marginHorizontal: 5 }}>
                        <Fontisto
                            name='search'
                            color={color}
                            size={25}
                        />
                    </TouchableOpacity>}
                    {!hideCart &&
                        <TouchableOpacity
                            //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                            style={{ marginHorizontal: 10 }}>
                            <Ionicons
                                name='cart-outline'
                                color={color}
                                size={30}
                            />
                        </TouchableOpacity>
                    }
                </View>

            </View >
        );
    };
}

const styles = StyleSheet.create({

});

export default Header;
