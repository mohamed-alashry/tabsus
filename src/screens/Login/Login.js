

import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { RNToasty } from 'react-native-toasty';

export default function Login() {

    const [Email, setEmail] = useState('');
    const [Password, setPasswored] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handleChange = () => {
        Validation()
        if (emailError == "" && passwordError == "" && Email && Password) {
            RNToasty.Show({ title: 'SUCESSSSS' })
        }
    }
    const Validation = () => {
        if (!Email) {
            setEmailError("Please Enter an email")
        }
        else if (Email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
            setEmailError("Enter A valid Email")
        }
        else {

            setEmailError("")
        }
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
            {emailError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {emailError}
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