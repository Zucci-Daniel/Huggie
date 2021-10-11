import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native';
import DropDown from '../COMPONENTS/utilities/DropDown';
import DropDownModal from '../COMPONENTS/utilities/DropDownModal';

const statusbarHeight = StatusBar.currentHeight;
const U1 = 'University';
const U2 = 'Polythecnic';
const U3 = 'College';
// Dropdown items
const institutions = {
    unis: [
        'University',
        'Polythecnic',
        'College',
    ]
}

const Universities = {
    unis: [
        'Imo state University',
        'University of Lagos',
        'University of Abuja',
        'Federal University of Technology  Owerri'
    ]
}
const Polythecnic = {
    unis: [
        'Federal ploythecnic Nekede',
        'Imo State Polythecnic'
    ]
}
const College = {
    unis: [
        'Alvan Ikoku college of Education',
        'Havard College of Science, Owerri',
        'Kingdom Diplomat College of Medicine'
    ]
}

function SignupScreen2(props) {

    const [items, setItems] = useState();
    const [inst, setInst] = useState('University');
    const [univ, setUniv] = useState();

    const onPress = (data) => {
        console.log(data);
        setItems(data)
    }

    const drop1 = (name) => {
        if(name === U1 || name === U2 || name === U3){
            setTimeout(() => {
                setItems();
                setInst(name)
            }, 100)
        }else{
            setTimeout(() => {
                setItems();
                nameShotter(name)
            }, 100)
        }
    };

    const nameShotter = (name) => {
        const ArrName = name.split('');
        if(ArrName.length > 17){
            const NewName = ArrName.slice(0, 16);
            const finalName = NewName.join('') + '...';
            setUniv(finalName);
        }else{
            setUniv(name)
        }
    }

    let div = (
        <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Universities} onPress={onPress} />
    )
    if(inst === U2){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={Polythecnic} onPress={onPress} />
    }else if(inst === U3){
        div = <DropDown name={!univ ? `select a ${inst}` : univ } width={'75%'} data={College} onPress={onPress} />
    }

    return (
        <View style={styles.container} >
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Text style={styles.intro}>Welcome to Huggie</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomTextHeader}>Tell Us A Bit About Yourself</Text>
                <View style={styles.inputContainer}>
                    <DropDown name={inst} width={'55%'} data={institutions} onPress={onPress} />
                    {div}
                    <TextInput placeholder='Department' style={styles.input} placeholderTextColor={'#000'} />
                    <TextInput placeholder='Level' style={[styles.input, {width: 100}]} placeholderTextColor={'#000'} />
                </View>
            </View>
            {items ? <DropDownModal data={items} onPress={drop1} /> : null }   
            <View style={styles.bottomNav}>
                <View style={[styles.box1, {backgroundColor:'#fff'}]} />
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
        backgroundColor: '#fff'
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
        paddingBottom: 25
    },
    intro: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
        fontFamily: 'verdana',
        width: 160,
        marginTop: 20,
        marginLeft: '7%'
    },
    intro2: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: '7%'
    },
    bottomContainer: {
        height: '75%',
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: '7%',
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.8
    },
    inputContainer: {
        height: 250,
        width: "100%",
        paddingTop: 20
    },
    input: {
        height: 45,
        width: 200,
        backgroundColor: '#f0f0f0',
        marginLeft: '7%',
        borderRadius: 7,
        paddingLeft: 15,
        fontSize: 17,
        marginBottom: 15
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

export default SignupScreen2;