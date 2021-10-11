import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import PersonalityBoxes from '../COMPONENTS/utilities/PersonalityBoxes';

const width = Dimensions.get('screen').width;
const statusbarHeight = StatusBar.currentHeight;

function SignupScreen3(props) {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        console.log(search)
    },[search])

    const itemAdder = (name) => {
        setItems(prevArr => [...prevArr, name])
    }

    const itemRemover = (name) => {
        const idx = items.indexOf(name);
        let item = items;
        item.splice(idx, 1);
        setItems(item);
    }

    const searchAdder = (name) => {
        setSearch(prevArr => [...prevArr, name]);
    }

    const searchRemover = (name) => {
        const idx = search.indexOf(name);
        let item = search;
        item.splice(idx, 1);
        setSearch(item)
    }

    return (
        <>
        <View>
            <StatusBar translucent backgroundColor={'transparent'} />
            <View style={styles.topContainer}>
                <Icons name='arrow-back' size={20} color='#fff' style={{marginTop: 10, marginLeft: 10}} />
                <Text style={styles.intro}>Welcome to Huggie</Text>
                <Text style={styles.intro2}>Students Dating Platform</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={{marginTop: '4%'}}>
                <Text style={styles.bottomTextHeader}>Your Kind Of Person...</Text>
                <View style={styles.mainContainer}>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Happy' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Fun' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover}  />
                        <PersonalityBoxes name='Sad' width='33.3%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Crazy' width='40%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Calm' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} />
                        <PersonalityBoxes name='Dumb' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Cute' width='35%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Funny' width='65%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                    <View style={styles.row1}>
                        <PersonalityBoxes name='Strong' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fs />
                        <PersonalityBoxes name='Proud' width='30%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} />
                        <PersonalityBoxes name='Smart' width='40%' item={items} itemAdder={itemAdder} itemRemover={itemRemover} fe />
                    </View>
                </View>
                <View style={styles.SearchSelector}>
                    <Text style={styles.searchText}>How would you like to conduct your search?</Text>
                    <View style={{alignItems: 'center'}}>
                        <View style={styles.row2}>
                            <PersonalityBoxes name='Department' width='50%' itemAdder={searchAdder} itemRemover={searchRemover} />
                            <PersonalityBoxes name='Level' width='50%' itemAdder={searchAdder} itemRemover={searchRemover} />
                        </View>
                    </View>
                </View>
                </View>
            </View>
        </View>
        <View style={styles.bottomNav}>
            <View style={[styles.box1, {backgroundColor:'#fff'}]} />
            <View style={[styles.box1, {backgroundColor: '#E51D7D'}]}>
                <Text style={{fontWeight: '700', color: '#fff'}}>I'm Done</Text>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    topContainer: {
        width: '100%',
        backgroundColor: '#DE5295',
        paddingTop: statusbarHeight,
        paddingBottom: 25,
        height: '30%'
    },
    intro: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 25,
        fontFamily: 'verdana',
        width: 160,
        marginTop: 10,
        marginLeft: 20
    },
    intro2: {
        color: '#fff',
        paddingTop: 10,
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: 20
    },
    bottomContainer: {
        width: '100%',
        backgroundColor: '#fff',
        height: '70%'
    },
    bottomTextHeader: {
        fontSize: 20,
        paddingLeft: 20,
        paddingTop: 15,
        letterSpacing: 1,
        opacity: 0.8
    },
    mainContainer: {
        width: width - 40,
        marginLeft: 20,
        marginTop: 20,
    },
    row1: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 3
    },
    SearchSelector: {
        width: '100%',
    },
    searchText: {
        fontSize: 18,
        marginLeft: 20,
        paddingTop: '5%',
        letterSpacing: 1,
        opacity: 0.8,
        width: '90%'
    },
    row2: {
        height: 40,
        width: '90%',
        flexDirection: 'row',
        marginTop: 13
    },
    checkbox: {
        width: 80,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 11
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#c4c4c4',
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

export default SignupScreen3;