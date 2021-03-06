import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

function DropDown({name, width, data, onPress}) {
    useEffect(() => {
        console.log(data)
    }, [])
    return (
        <TouchableWithoutFeedback onPress={() => onPress(data.unis)}>
            <View style={[styles.container, {width: width}]}>
                <Text style={styles.Text}>{name}</Text>
                <Icons name='down' size={16} color="#000" style={styles.arrow} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        width: 150,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        opacity: 0.8,
        marginBottom: 15
    },
    Text: {
        fontSize: 17,
        letterSpacing: 1.5,
        fontWeight: '600',
    },
    arrow: {
        marginLeft: 10
    }
})

export default DropDown;