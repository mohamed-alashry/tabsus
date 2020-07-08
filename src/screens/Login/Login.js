

import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { RNToasty } from 'react-native-toasty';

export default function UselessTextInput() {

    const [Email, setEmail] = useState('');
    const [Password, setPasswored] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleChange = () => {
        usernameValidation()
        passwordValidation()
        if (usernameError == "" && passwordError==""){ 
            RNToasty.Show({ title: 'SUCESSSSS' })
        }
 
    }
    const usernameValidation = () => {
        if (!Email) {
            setUsernameError("Please Enter an email")
        }
        else if (Email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
            setUsernameError("Enter A valid Email")
        }
        else {
            setUsernameError("")
          
        }
    }
    const passwordValidation = () => {
        if (!Password) {
            setPasswordError("Please Enter a password")
        }
        else if (Password && !/^[A-Za-z]\w{7,14}$/.test(Password)) {
            setPasswordError("Enter A valid Password")
        } else {
            setPasswordError("")
        }
    }
    return (
        <View >
            <Header
                hideSearch hideBell hideCart
                title={' Home'}
                showBack={true}
            ></Header>
            <Text style={{ marginVertical: 15, marginHorizontal: 25 }}>Email Or Email</Text>
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setEmail(text)}
                value={Email}
            />
            {usernameError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {usernameError}
            </Text>}
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>Password</Text>
            <TextInput
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setPasswored(text)}
                value={Password}
            />
            {passwordError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {passwordError}
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
                onPress={() => handleChange()}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
            {/* <TextInput style={{ height: 45, borderWidth: 1, marginHorizontal: 25 }}></TextInput> */}
        </View>
    );
}
const styles = StyleSheet.create({

})