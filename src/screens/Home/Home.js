import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
import Header from '../../components/Header';
import Item from '../../components/Item';
import ShowAll from '../../components/ShowAll'

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
            <>
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
                        style={{ backgroundColor: 'white', width: '100%', }}
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                            <Item discount={'17%'}></Item>
                        }>
                    </FlatList>
                    <ShowAll title={'New Offers'}></ShowAll>
                    <FlatList
                        style={{ backgroundColor: 'white', width: '100%', }}
                        data={this.state.data}
                        numColumns={2}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) =>
                            <Item discount={'17%'}></Item>
                        }>
                    </FlatList>
                </ScrollView>


            </>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
