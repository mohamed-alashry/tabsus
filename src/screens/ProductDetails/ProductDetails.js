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
import StarRating from 'react-native-star-rating';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShowAll from '../../components/ShowAll';
import Item from '../../components/Item';
import { FlatList } from 'react-native-gesture-handler';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3, 4],
            page: "Product"
        };
    }
    render() {
        console.log(this.props.props)
        const { page } = this.state
        return (
            <ScrollView style={{ backgroundColor: '#F4F5F8' }}>
                <StatusBar barStyle="dark-content" />
                <Header
                    transparent
                    hideSearch
                    title={' Home'}
                    showBack={true}
                    props={this.props}></Header>
                {/* <View style={{ backgroundColor: '#F4F5F8',  }}> */}
                <Image style={{
                    height: 170, width: '100%',
                }}
                    source={{ uri: 'https://www.nicepng.com/png/full/4-46069_t-shirt-png-transparent-image-black-t-shirt.png' }}
                    resizeMode={'contain'} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#DBDCDE' }}>
                    <TouchableOpacity
                        style={{ marginVertical: 10 }}
                        onPress={() => this.setState({ page: 'Product' })}>
                        <Text style={{ borderRadius: 15, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: page == "Product" ? "white" : "transparent" }}>sdsdsds</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginVertical: 10 }}
                        onPress={() => this.setState({ page: 'Details' })}>
                        <Text style={{ borderRadius: 15, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: page == "Details" ? "white" : "transparent" }}>sdsdsds</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ marginVertical: 10 }}
                        onPress={() => this.setState({ page: 'Reviews' })}>
                        <Text style={{ borderRadius: 15, paddingHorizontal: 10, paddingVertical: 7, backgroundColor: page == "Reviews" ? "white" : "transparent" }}>sdsdsds</Text>
                    </TouchableOpacity>
                </View>
                {
                    page == "Product" && <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>s,dls,dls</Text>
                            <Text>dsdsdsdsd</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                starStyle={{ color: '#EFA510' }}
                                starSize={25}
                                containerStyle={{ flex: .2, marginHorizontal: 12 }}
                                rating={4}
                            // selectedStar={rating => this.onStarRatingPress(rating)}
                            />
                            <Text>dsdsdsdsd</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>s,dls,dls</Text>
                                <Text>dsdsdsdsd</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Text>s,dls,dls</Text>
                                <Text>dsdsdsdsd</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'gray', height: .5, width: '100%' }}></View>
                        <Text>Select Color</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                borderRadius: 44 / 2,
                                backgroundColor: 'red'
                            }}>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                borderRadius: 44 / 2,
                                backgroundColor: 'red'
                            }}></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                borderRadius: 44 / 2,
                                backgroundColor: 'red'
                            }}></TouchableOpacity>
                            <TouchableOpacity style={{
                                width: 44,
                                height: 44,
                                borderRadius: 44 / 2,
                                backgroundColor: 'red'
                            }}></TouchableOpacity>

                        </View>
                        <View style={{ backgroundColor: 'gray', height: .5, width: '100%' }}></View>


                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>dsdsdsd</Text>
                            <Octicons
                                name='chevron-right'
                                color={'black'}
                                size={20}
                            />
                        </View>
                        <View style={{ backgroundColor: 'gray', height: .5, width: '100%' }}></View>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MaterialCommunityIcons
                                style={{ borderWidth: 2, borderColor: 'gray' }}
                                name='truck-delivery-outline'
                                color={'gray'}
                                size={50}
                            />
                            <View>
                                <Text>dfffffffff</Text>
                                <Text>d,fld,fld,l</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MaterialCommunityIcons
                                style={{ borderWidth: 2, borderColor: 'gray' }}
                                name='truck-delivery-outline'
                                color={'gray'}
                                size={50}
                            />
                            <View>
                                <Text>dfffffffff</Text>
                                <Text>d,fld,fld,l</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <MaterialCommunityIcons
                                style={{ borderWidth: 2, borderColor: 'gray' }}
                                name='truck-delivery-outline'
                                color={'gray'}
                                size={50}
                            />
                            <View>
                                <Text>dfffffffff</Text>
                                <Text>d,fld,fld,l</Text>
                            </View>
                        </View>

                        <View style={{ backgroundColor: 'gray', height: .5, width: '100%' }}></View>
                        <ShowAll title={'New Offers'}></ShowAll>
                        <FlatList
                            style={{ backgroundColor: 'white' }}
                            data={this.state.data}
                            numColumns={2}
                            keyExtractor={({ id }, index) => id}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    style={{ flex: .5 }}
                                    onPress={() => this.props.navigation.navigate("ProductDetails")}
                                >
                                    <Item discount={'17%'}></Item>
                                </TouchableOpacity>
                            }>
                        </FlatList>
                        <View style={{ backgroundColor: 'gray', height: .5, width: '100%' }}></View>
                        <View style={{flex:1 , flexDirection:'row'}}>
                        <TouchableOpacity style={{flex:.2 ,backgroundColor:'red' , marginHorizontal:5 , borderRadius:15, alignItems:'center' }}>
                            <Text style={{ }}>ADD</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:.8 ,backgroundColor:'red' , marginHorizontal:5 , borderRadius:15, alignItems:'center' }}>
                            <Text style={{ }}>ADD To Cart</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                }
            </ScrollView>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
