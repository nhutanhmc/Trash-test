import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thay FontAwesome bằng bộ icon bạn muốn dùng

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../image/logo.png')} // Điều chỉnh đường dẫn tương đối
        style={styles.image}
      />
      <Text style={styles.text}>
        Home
      </Text>
      <Icon name="bell" size={20} color="#FE7F9C" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 10
  },
  image: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 20,
    color: '#FE7F9C',
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
});
