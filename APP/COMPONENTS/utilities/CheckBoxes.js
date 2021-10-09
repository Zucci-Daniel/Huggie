import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CheckBoxes(props) {
    return (
        <View style={styles.container}>
            <View style={styles.checkbox}>
                <View style={styles.circle}></View>
                <Text style={{opacity: 0.7, marginLeft: 8}}>Male</Text>
            </View>
            <View style={styles.checkbox}>
                <View style={[styles.circle, {backgroundColor: '#DE5295'}]}></View>
                <Text style={{opacity: 0.7, marginLeft: 8}}>Female</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row'
    },
    checkbox: {
        width: 80,
        flexDirection: 'row'
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#AFAFAF4A'
    }
})

export default CheckBoxes;