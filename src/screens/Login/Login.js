

import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { RNToasty } from 'react-native-toasty';

export default function UselessTextInput() {

    const [Username, setUsername] = useState('');
    const [Password, setPasswored] = useState('');
    const handleChange = () => {
        if (Username) {
            if (Password) {
                return 0
            }
            else {
                return 1
            }
        } else {
            return 2
        }
    }
    return (
        <View style={{}} >
            <Header
                hideSearch hideBell hideCart
                title={' Home'}
                showBack={true}
            ></Header>
            <Text style={{ marginVertical: 15, marginHorizontal: 25 }}>Email Or Username</Text>
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setUsername(text)}
                value={Username}
            />
            {handleChange() === 2 && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                Please Enter a vaild Username
            </Text>}
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>Password</Text>
            <TextInput
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setPasswored(text)}
                value={Password}
            />
            {handleChange() === 1 && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                Please Enter a vaild Password
            </Text>}

            <TouchableOpacity
                style={{
                    height: 50,
                    marginHorizontal: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 15,
                    backgroundColor: 'red'

                }}
                onPress={() => handleChange() === 0 && RNToasty.Show({
                    title: "SUCCESS"
                })}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
            {/* <TextInput style={{ height: 45, borderWidth: 1, marginHorizontal: 25 }}></TextInput> */}
        </View>
    );
}
const styles = StyleSheet.create({

})