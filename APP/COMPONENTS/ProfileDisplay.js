import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import UserShowCaseInitials from './utilities/UserShowCaseInitials'
import { scale,ScaledSheet } from 'react-native-size-matters';


export default function ProfileDisplay({ image, username, dept, level, children,innerRef }) {
    return (
        <View style={styles.ProfileDisplay}>
            <View style={styles.Display}>
                <Image source={image} style={styles.image} ref={innerRef} />
                <UserShowCaseInitials
                    username={username}
                    dept={dept}
                    level={level}
                    extraStyles={styles.extraStyles}
                    onPress={()=>console.log('pressed')}
                    >{children}</UserShowCaseInitials>
            </View>
        </View>
    )
}

const CARD_HEIGHT = Dimensions.get('window').height * 1;
const CARD_HEIGHT2 = Dimensions.get('window').height * 0.899;

const styles = ScaledSheet.create({
    ProfileDisplay: {
        height: CARD_HEIGHT2,
        position: 'relative',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
     
    },
    Display: {
        width: Dimensions.get('window').width - scale(20),
        height:  Dimensions.get('window').height - scale(80),
        borderRadius: scale(10),
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: scale(5),
        },
        shadowOpacity: scale(0.34),
        shadowRadius: scale(6.27),
        
        elevation: scale(5),
    },
    image: {
        height: '100%',
        width: '100%'
    },
    extraStyles: {
        position: 'absolute',
        bottom: CARD_HEIGHT / 8
    }
})
