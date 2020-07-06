import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';


class Header extends React.Component {
    render() {
        const { title, showBack, showMenu, showExit } = this.props
        return (
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#F1BA36',
                marginHorizontal: 10,
                height: 30,
                marginVertical: 10,
                paddingHorizontal: 10
            }}>
                <Text>{title}</Text>
                <TouchableOpacity>
                    <Text>See All</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({

});

export default Header;
