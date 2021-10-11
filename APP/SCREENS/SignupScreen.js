import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, StatusBar, Dimensions, TouchableWithoutFeedback } from 'react-native';

import AbstractButtons from '../COMPONENTS/utilities/AbstractButtons';

//icons
import fbIcon from '../ASSETS/fb.png';
import GoogleIcon from '../ASSETS/search.png'
import CheckBoxes from '../COMPONENTS/utilities/CheckBoxes';

const statusbarHeight = StatusBar.currentHeight;
const width = Dimensions.get('screen').width;

function SignupScreen(props) {
    const [login, setLogin] = useState(false);

    const loginBtn = () => {
        if(!login){
            setLogin(true)
        }else {
            setLogin(false)
        }
    }

    let div = (
        <View style={styles.inputsContainer}>
            <TextInput placeholder='Username' style={styles.input} />
            <TextInput placeholder='Email' style={styles.input} />
            <View style={styles.passwordContainer}>
                <View style={{width: '50%', alignItems: 'center'}}>
                    <TextInput placeholder='Password' style={[styles.input, {width: '95%'}]} />
                </View>
                <View style={{width: '50%', alignItems: 'center'}}>
                    <TextInput placeholder='Confirm Password' style={[styles.input, {width: '95%'}]} />
                </View>
            </View>
            <CheckBoxes />
        </View>
    )
    if(login){
        div = (
            <View style={styles.inputsContainer}>
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Text style={styles.intro}>{!login ? 'Welcome' : 'Login'} to Huggie</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
                <View style={styles.bottomTop}>
                    <Text style={styles.signupText}>{!login ? 'Sign up' : 'Login'} using</Text>
                    <View style={styles.buttonsContainer}>
                        <AbstractButtons name='Google' icon={GoogleIcon} />
                        <AbstractButtons name='Facebook' icon={fbIcon} />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTextHeader}>{!login ? 'Or Create a new account' : 'Login With Email' }</Text>
                {div}
            </View>
            <View style={styles.bottomNav}>
                <TouchableWithoutFeedback onPress={loginBtn}>
                    <View style={styles.box1}>
                        <Text style={{fontWeight: '600'}}>{!login ? 'Login' : 'Sign up'} Instead</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.box1, {backgroundColor: '#E51D7D'}]}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>I'm Done</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    topContainer: {
        height: '40%',
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
    },
    intro: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
        fontFamily: 'verdana',
        width: 160,
        marginTop: 20,
        marginLeft: 20
    },
    intro2: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: 20
    },
    bottomTop: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom:20
    },
    signupText: {
        color: '#fff',
        opacity: 0.5,
        letterSpacing: 1,
        fontSize: 15,
        paddingLeft: 20,
        paddingBottom: 10
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.9
    },
    inputsContainer: {
        width: width - 40,
        marginLeft: 20,
        marginTop: 12
    },
    input: {
        height: 43,
        width: '100%',
        backgroundColor: '#AFAFAF4A',
        borderRadius: 7,
        paddingLeft: 15,
        marginBottom: 15
    },
    passwordContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    bottomNav: {
        height: 55,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    },
    box1: {
        height: 55,
        width: '50%',
        backgroundColor: '#CFCBCB',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600'
    }
})

export default SignupScreen;