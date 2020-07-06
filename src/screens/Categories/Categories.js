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
import ShowAll from '../../components/ShowAll'
import Header from '../../components/Header';

import { FlatList } from 'react-native-gesture-handler';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Clothing',
            data: [1, 2]
        };

    }
    render() {
        const { page } = this.state;
        return (
            <>
                <Header
                    title={' Home'}
                    showMenu={true}
                    props={this.props}></Header>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', height: 50, alignItems: 'center', backgroundColor: '#F4F5F8' }}>
                    <TouchableOpacity
                        onPress={() => this.setState({ page: 'Clothing' })}
                        style={{ backgroundColor: page == 'Clothing' ? '#DBDCDE' : 'transparent', height: '100%', justifyContent: 'center' }}>
                        <Text >Clothing and Apperal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: page == 'Home' ? '#DBDCDE' : 'transparent', height: '100%', justifyContent: 'center' }}
                        onPress={() => this.setState({ page: 'Home' })}>
                        <Text>Home , Garden</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({ page: 'Organic' })}
                        style={{ backgroundColor: page == 'Organic' ? '#DBDCDE' : 'transparent', height: '100%', justifyContent: 'center' }}>
                        <Text>Organic</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: page == 'Consumer' ? '#DBDCDE' : 'transparent', height: '100%', justifyContent: 'center' }}
                        onPress={() => this.setState({ page: 'Consumer' })}>
                        <Text>Consumer Electric</Text>
                    </TouchableOpacity>
                </View>
                {page == 'Clothing' &&
                    <View>
                        <ShowAll title={'electronics'}></ShowAll>
                        <FlatList
                            style={{ backgroundColor: 'white', width: '100%', }}
                            data={this.state.data}
                            numColumns={2}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#F4F5F8', justifyContent: 'center' }}>
                                        <Image
                                            style={{ width: 150, height: 150, marginVertical: 25, marginHorizontal: 10 }}
                                            resizeMode={'contain'}
                                            source={{ uri: 'https://www.nicepng.com/png/full/4-46069_t-shirt-png-transparent-image-black-t-shirt.png' }}></Image>
                                    </View>
                                    <Text>fmskfmskfk</Text>
                                </View>
                            }>
                        </FlatList>
                        <ShowAll title={'electronics'}></ShowAll>
                        <FlatList
                            style={{ backgroundColor: 'white', width: '100%', }}
                            data={this.state.data}
                            numColumns={2}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: '#F4F5F8', justifyContent: 'center' }}>
                                        <Image
                                            style={{ width: 150, height: 150, marginVertical: 25, marginHorizontal: 10 }}
                                            resizeMode={'contain'}
                                            source={{ uri: 'https://www.nicepng.com/png/full/4-46069_t-shirt-png-transparent-image-black-t-shirt.png' }}></Image>
                                    </View>
                                    <Text>fmskfmskfk</Text>
                                </View>
                            }>
                        </FlatList>
                    </View>
                }
            </>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
