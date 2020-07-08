

import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import { RNToasty } from 'react-native-toasty';

export default function Login() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [Password, setPasswored] = useState('');
    const [confirmPassword, setConfirmPasswored] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleChange = () => {
        Validation()
        if (firstNameError == "" &&
            lastNameError == "" &&
            emailError == "" &&
            mobileNumberError == "" &&
            confirmPasswordError == "" &&
            passwordError == "" &&
            firstName &&
            lastName &&
            Email &&
            mobileNumber &&
            Password == confirmPassword) {
            RNToasty.Show({ title: 'SUCESSSSS' })
        }
    }
    const Validation = () => {
        if (!firstName) {
            setFirstNameError("Please Enter a First Name")
        }
        else if (firstName && !/^[a-z ,.'-]+$/i.test(firstName)) {
            setFirstNameError("Enter A valid firstName")
        }
        else {

            setFirstNameError("")
        }
        if (!lastName) {
            setLastNameError("Please Enter a last Name")
        }
        else if (lastName && !/^[a-zA-Z\s_\u0600-\u06FF]+$/.test(lastName)) {
            setLastNameError("Enter A valid lastName")
        }
        else {

            setLastNameError("")
        }
        if (!Email) {
            setEmailError("Please Enter an email")
        }
        else if (Email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
            setEmailError("Enter A valid Email")
        }
        else {

            setEmailError("")
        }
        if (!mobileNumber) {
            setMobileNumberError("Please Enter an email")
        }
        else if (mobileNumber && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(mobileNumber)) {
            setMobileNumberError("Enter A valid mobileNumber")
        }
        else {

            setMobileNumberError("")
        }
        if (!Password) {
            setPasswordError("Please Enter a password")
        }
        else if (Password && !/^[A-Za-z]\w{7,14}$/.test(Password)) {
            setPasswordError("Enter A valid Password")
        } else {
            setPasswordError("")
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Please Enter a password")
        }
        else if (confirmPassword && !/^[A-Za-z]\w{7,14}$/.test(confirmPassword)) {
            setConfirmPasswordError("Enter A  confirm Password")
        } else if(Password != confirmPassword) {
            setConfirmPasswordError("passwords does't match")
        }
        else {
            setConfirmPasswordError("")
        }
        
    }

    return (
        <ScrollView >
            <Header
                hideSearch hideBell hideCart
                title={' Home'}
                showBack={true}
            ></Header>
            <Text style={{ marginVertical: 15, marginHorizontal: 25 }}>firstName Or firstName</Text>
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>firstName</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setFirstName(text)}
                value={firstName}
            />
            {firstNameError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {firstNameError}
            </Text>}
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>lastName</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setLastName(text)}
                value={lastName}
            />
            {lastNameError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {lastNameError}
            </Text>}
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>Email</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setEmail(text)}
                value={Email}
            />
            {emailError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {emailError}
            </Text>}
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>mobileNumber</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setMobileNumber(text)}
                value={mobileNumber}
            />
            {mobileNumberError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {mobileNumberError}
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
            <Text style={{ marginHorizontal: 25, marginVertical: 10 }}>confirmPassword</Text>
            <TextInput
                secureTextEntry
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 25 }}
                onChangeText={text => setConfirmPasswored(text)}
                value={confirmPassword}
            />
            {confirmPasswordError != "" && <Text style={{ marginHorizontal: 25, marginVertical: 10, color: 'red' }}>
                {confirmPasswordError}
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
        </ScrollView>
    );
}
const styles = StyleSheet.create({

})