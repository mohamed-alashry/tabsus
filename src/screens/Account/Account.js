import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';

class App extends React.Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <Text>Account</Text>
                <TouchableOpacity style={{ height: 50, width: 100, backgroundColor: 'red' }}
                    onPress={() => this.props.props.navigation.navigate('test')}></TouchableOpacity>
            </>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
