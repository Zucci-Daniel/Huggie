import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../config/colors';
import AppIcon from './AppIcon';
import UserShowCaseInitials from './UserShowCaseInitials';



export default function GalleryProfilePictureScreen({ picture }) {
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.GalleryProfilePicture}>
                <View style={styles.picture}>
                    <Image source={require('../../ASSETS/jackson.jpg')} style={styles.image} />
                    <AppIcon name="camera" size={100} extraStyle={styles.cameraIcon} />
                </View>
                <UserShowCaseInitials />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    GalleryProfilePicture: {
        width: '100%',
        height: 2000,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    picture: {
        width: '95%',
        height: 550,
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 0,
        color: colors.brandColor
    }
})
