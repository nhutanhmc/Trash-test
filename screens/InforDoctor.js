import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Avatar, Card, Paragraph, Button, TextInput, Text } from 'react-native-paper';

const InforDoctor = () => {
  const [showText, setShowText] = useState(false);

  const handlePress = () => {
    setShowText(!showText);
  };

  const data = [
    { id: '1', title: 'amyrobson', subtitle: '1 week ago', content: 'Impressive!' },
    { id: '2', title: 'maxblagun', subtitle: '1 week ago', content: 'Wow, your project looks awesome!' },
    { id: '3', title: 'ramsesmiron', subtitle: '1 week ago', content: 'If you have the same order' },
    { id: '4', title: 'juliusomo', subtitle: '2 days ago', content: 'I couldn’t agree more with this.' },
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.commentCard} elevation={0}>
      <Card.Title
        title={item.title}
        subtitle={item.subtitle}
        left={(props) => (
          <Avatar.Text
            {...props}
            label={item.title[0].toUpperCase()}
            style={styles.avatar}
          />
        )}
      />
      <Card.Content>
        <Paragraph>{item.content}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Reply</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.mainContainer}>
      <Card elevation={0}>
        <Card.Title
          title="Dr. Lisa Welch"
          subtitle="Expert Clinical Psychologist"
          left={(props) => (
            <Avatar.Image
              {...props}
              source={{ uri: 'https://via.placeholder.com/150' }}
            />
          )}
          right={(props) => (
            <View {...props} style={styles.scoreContainer}>
              <Text style={styles.scoreText}>80</Text>
            </View>
          )}
        />
        <Card.Content>
          <Text style={styles.repliedText}>Replied</Text>
          <Paragraph>Order in week</Paragraph>
        </Card.Content>
      </Card>

      <Button 
        style={[styles.button, styles.buttonRight]} 
        mode="text" 
        onPress={handlePress}>
        {showText ? 'Comment' : 'Press me'}
      </Button>

      {showText ? (
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Xin chào</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
        
      )}

      <View style={styles.addItem}>
        <TextInput
          label="Add a comment..."
          mode="outlined"
          multiline
        />
        <Button mode="contained" style={styles.sendButton}>
          Send
        </Button>
      </View>
    </View>
  );
};

export default InforDoctor;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  flatListContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  repliedText: {
    fontSize: 16,
    color: 'green',
  },
  commentCard: {
    marginVertical: 10,
    backgroundColor: '#fff', // Màu nền trắng cho Card
    borderWidth: 0, // Không có màu viền
    shadowColor: 'transparent', // Loại bỏ bóng
  },
  avatar: {
    backgroundColor: '#6200ea',
  },
  addItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  sendButton: {
    marginLeft: 10,
  },
  button: {
    marginVertical: 10,
  },
  buttonRight: {
    alignSelf: 'flex-end', // Căn chỉnh button sát phải
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 700, // Chiều cao tương tự FlatList
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
