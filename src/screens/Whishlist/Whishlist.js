import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity
} from 'react-native'
import Header from '../../components/Header'
import Item from '../../components/Item'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3, 4]
        };
    }
    render() {
        return (
            <>
                <Header
                    title={' Home'}
                    showMenu={true}
                    props={this.props}></Header>
                <FlatList
                    style={{ backgroundColor: 'white', width: '100%', marginVertical: 10 }}
                    data={this.state.data}
                    numColumns={2}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ flex: .5 }}>
                            <Item></Item>
                        </TouchableOpacity>
                    }>
                </FlatList>
            </>
        );
    };
}
const styles = StyleSheet.create({

});

export default App;
