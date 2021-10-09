import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import Details from './Details'
import ProfileName from './ProfileName'
import SelectBox from './SelectBox'
import VerifiedIcon from './VerifiedIcon'

export default function UserShowCaseInitials({extraStyles}) {
    return (
        <View style={[styles.UserShowCaseInitials,extraStyles]}>
           
        <View style={styles.UserShowCaseDetails}>
            <View style={styles.initialsPane}>
           <ProfileName extraStyles={styles.userName} username="Nikel Jackson" />
           <VerifiedIcon />
            </View>
            <Details extraStyles={styles.details} department={'Computer Sci'} level={400}/>

            <View style={styles.selectionPane}>

<SelectBox />
<SelectBox />
<SelectBox />
<SelectBox />
            </View>
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    UserShowCaseInitials:{
        height:250,
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingVertical:10
    },
    UserShowCaseDetails:{
        height:200,
        width:'90%',
        backgroundColor:colors.white,
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        position:'relative',
        paddingLeft:40,
        
    },
    initialsPane:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:20
    },
    userName:{
        color:colors.dark,
        marginRight:5,
        fontSize:20
    },
    details:{
        fontSize:13,
        color:colors.fadedDark
    },
    selectionPane:{
        marginTop:20,
        flexWrap:'wrap',
        flexDirection:'row',
    }
})
