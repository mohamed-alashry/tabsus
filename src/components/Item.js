import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Image,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import StarRating from 'react-native-star-rating';
class Item extends React.Component {
    render() {
        const { discount } = this.props;
        return (
            <View style={{ backgroundColor: 'transparent', alignItems: 'center' }}>
                <View style={{ backgroundColor: '#F4F5F8' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 7, marginHorizontal: 5 }}>
                        <TouchableOpacity
                            //  onPress={() => this.props.props.navigation.dispatch(StackActions.pop(1))}
                            style={{ marginHorizontal: 0 }}>
                            <Fontisto
                                name='heart'
                                color="gray"
                                size={25}
                            />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: 'red', borderRadius: 3 }}>
                            <Text>{discount ? discount : null}</Text>
                        </View>
                    </View>
                    <Image style={{ width: 150, height: 150 }} resizeMode={'stretch'}
                        source={{ uri: 'https://www.nicepng.com/png/full/4-46069_t-shirt-png-transparent-image-black-t-shirt.png' }}></Image>
                </View>
                <Text>dededede</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    starStyle={{ color: '#EFA510' }}
                    starSize={25}
                    containerStyle={{ flex: 1, marginHorizontal: 12 }}
                    rating={4}
                // selectedStar={rating => this.onStarRatingPress(rating)}
                />
                <Text style={{ color: 'blue', fontSize: 15 }}>EG 20</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({

});

export default Item;
