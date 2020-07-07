import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    BackHandler,
    StatusBar,
} from 'react-native';
import Tabs from 'react-native-tabs';
import Home from './screens/Home/Home';
import Account from './screens/Account/Account';
import Whishlist from './screens/Whishlist/Whishlist';
import Categories from './screens/Categories/Categories';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from './assets/colors';
// import SplashScreen from 'react-native-splash-screen';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Home',
        };
        // SplashScreen.hide();
    }
    render() {
        const { page } = this.state;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                }}>
                <View style={{ flex: 1 }}>
                    {page == 'Home' && (<Home props={this.props} />)}
                    {page == 'Account' && (<Account props={this.props} />)}
                    {page == 'Whishlist' && <Whishlist props={this.props} />}
                    {page == 'Categories' && <Categories props={this.props} />}
                </View>
                <Tabs
                    selected={this.state.page}
                    swipeEnabled={true}
                    style={{ height: 60, position: 'relative', backgroundColor: 'white' }}
                    selectedStyle={{ color: '#39B54A' }}
                    onSelect={(el) => this.setState({ page: el.props.name })}>
                    <View
                        name={'Home'}
                        style={styles.container}>
                        <SimpleLineIcons
                            name={'home'}
                            color={page == 'Home' ? colors.black : colors.gray}
                            size={20}
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}
                        />
                        <Text
                            style={{
                                flex: 1,
                                alignItems: 'stretch',
                                justifyContent: 'center',
                                color: page == 'Home' ? colors.black : colors.gray,
                            }}>Home</Text>
                    </View>
                    <View
                        style={styles.container}
                        name={'Categories'}>
                        <SimpleLineIcons
                            name={'menu'}
                            color={page == 'Categories' ? colors.black : colors.gray}
                            size={20}
                        />
                        <Text
                            style={{
                                flex: 1,
                                alignItems: 'stretch',
                                justifyContent: 'center',
                                color: page == 'Categories' ? colors.black : colors.gray,
                            }}>
                            Categories
            </Text>
                    </View>
                    <View
                        style={styles.container}
                        name={'Whishlist'}>
                        <FontAwesome
                            name={'heart-o'}
                            color={page == 'Whishlist' ? colors.black : colors.gray}
                            size={20}
                        />
                        <Text
                            style={{
                                flex: 1,
                                alignItems: 'stretch',
                                justifyContent: 'center',
                                color: page == 'Whishlist' ? colors.black : colors.gray,
                            }}>
                            Whishlist
                            </Text>
                    </View>
                    <View
                        style={styles.container}
                        name={'Account'}>
                        <Ionicons
                            name={'person-outline'}
                            color={page == 'Account' ? colors.black : colors.gray}
                            size={20}
                        />
                        <Text
                            style={{
                                flex: 1,
                                alignItems: 'stretch',
                                justifyContent: 'center',
                                color:
                                    page == 'Account' ? colors.black : colors.gray,
                            }}>
                            Account
            </Text>
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Main;
