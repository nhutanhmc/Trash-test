import React from 'react';
import { Alert, View, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LeftContent = () => <Avatar.Image source={require('../avatars/avarta.jpg')} size={40} />;

const MessageLink = () => {
    const handlePress = () => {
        Alert.alert('Button pressed', 'Perform some action here');
    };

    const data = Array.from({ length: 10 }, (_, index) => ({
        id: String(index),
        title: `Card Title ${index}`,
        subtitle: `Card Subtitle ${index}`,
    }));

    const renderItem = ({ item }) => (
        <Card onPress={handlePress} style={{ borderRadius: 30, marginBottom: 10 }}>
            <Card.Title
                title={item.title}
                subtitle={item.subtitle}
                left={LeftContent}
                right={() => (
                    <Button
                        icon="message"
                        style={{ color: 'pink' }}
                        onPress={handlePress}
                    />
                )}
            />
        </Card>
    );


  return (
    <View>
      
      <Image source={require('../image/Warnning.png')} style={{ width: '100%', height: 130, resizeMode: 'contain' }} />
      <View style={styles.flatListContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 20,
    maxHeight: 630,
},
})
export default MessageLink;
