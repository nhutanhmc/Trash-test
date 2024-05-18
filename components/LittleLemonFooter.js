import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="envelope" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="compass" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="user" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(254, 153, 176, 0.27)', // Màu FE99B0 với độ trong suốt 27%
    height: 60,
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
