import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import Header from '../../components/Header';
import Item from '../../components/Item';
import ShowAll from '../../components/ShowAll'
import { FlatList } from 'react-native-gesture-handler';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3, 4]
        };
    }
    render() {
        console.log(this.props.props)
        return (
            <View >
                <StatusBar barStyle="dark-content" />
                <Header
                    title={' Home'}
                    showMenu={true}

                    props={this.props}></Header>

                <ScrollView>
                    <Image
                        style={{ width: '100%', height: 150 }}
                        resizeMode={'stretch'}
                        source={require('../../assets/img/header.png')}></Image>
                    <ShowAll title={'New Offers'}></ShowAll>
                    <FlatList
                        style={{ backgroundColor: 'white' }}
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={{ flex: .5 }}
                                onPress={() => this.props.props.navigation.navigate("ProductDetails")}
                            >
                                <Item discount={'17%'}></Item>
                            </TouchableOpacity>
                        }>
                    </FlatList>
                    <ShowAll title={'New Offers'}></ShowAll>
                    <FlatList
                        style={{ backgroundColor: 'white', width: '100%', }}
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                        <TouchableOpacity
                        style={{ flex: .5 }}
                        onPress={() => this.props.props.navigation.navigate("ProductDetails")}
                    >
                        <Item discount={'17%'}></Item>
                    </TouchableOpacity>
                        }>
                    </FlatList>
                </ScrollView>


            </View>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
