import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LittleLemonFooter from '../components/LittleLemonFooter';
import LittleLemonHeader from '../components/LittleLemonHeader';
import AppInfor from './AppInfor';

const images = [
    { source: require('../image/BS.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/Career.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/Communicate.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/IH.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/NB.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/PG.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/RA.png'), height: Math.floor(Math.random() * 51) + 120 },
    { source: require('../image/ReduceStress.png'), height: Math.floor(Math.random() * 51) + 120 },
];

export default function Welcome() {
    const navigation = useNavigation();

    const navigateToMenu = () => {
        navigation.navigate('AppInfor');
    };


    return (
        <View style={styles.container}>
            < LittleLemonHeader/>
            <Text style={styles.hiText}>
                <Text style={styles.hi}>Hi </Text>
                <Text style={styles.name}>Linh</Text>
            </Text>
            <Text style={styles.subText}>Today can be a good day</Text>
            <View style={styles.appointmentContainer}>
                <Text style={styles.today}>
                    Today
                    <Text style={styles.appointmentText}> you don’t have any appointment</Text>
                </Text>
            </View>
            {/* Thêm hai View Text mới */}
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>What Brings you to Links?</Text>
                <Text style={styles.secondaryText}>Choose a topic to focus on</Text>
            </View>
            {/* Kết thúc phần thêm mới */}
            <View style={styles.flatListContainer}>
                <FlatList
                    data={images}
                    renderItem={({ item }) => (
                        <TouchableWithoutFeedback onPress={navigateToMenu}>
                            <Image source={item.source} style={[styles.image, { height: item.height }]} />
                        </TouchableWithoutFeedback>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.imageContainer}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    hiText: {
        fontSize: 24,
    },
    hi: {
        color: '#FE7F9C',
    },
    name: {
        color: 'black',
    },
    subText: {
        fontSize: 16,
        color: 'grey',
        marginTop: 10,
        
    },
    appointmentContainer: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#FECFD4',
        padding: 10,
    },
    today: {
        color: '#FE7F9C',
        fontSize: 16,
    },
    appointmentText: {
        color: 'black',
        fontSize: 16,
    },
    textContainer: {
        marginTop: 20,
    },
    mainText: {
        fontSize: 24,
        marginBottom: 5,
    },
    secondaryText: {
        fontSize: 16,
        color: 'gray',
    },
    imageContainer: {
        marginTop: 20,
    },
    image: {
        flex: 1,
        width: '100%',
        margin: 5,
    },
    flatListContainer: {
        flexGrow: 1,
        maxHeight: 550,
    },
    footerContainer: {
        paddingVertical: 10,
    },
});
