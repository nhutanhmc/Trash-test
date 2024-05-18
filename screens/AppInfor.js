import React, { useRef, useState, useEffect } from 'react';
import { Animated, Easing, View, ScrollView, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LeftContent = () => <Avatar.Image source={require('../avatars/avarta.jpg')} size={40} />;

const AppInfor = () => {
    const navigation = useNavigation();
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [expandedCard, setExpandedCard] = useState(null);

    const handlePress = () => {
        navigation.navigate('MessageLink');
    };

    const handlePressM = () => {
        navigation.navigate('InforDoctor');
    };

    const data = Array.from({ length: 10 }, (_, index) => ({
        id: String(index),
        title: `Card Title ${index}`,
        subtitle: `Card Subtitle ${index}`,
    }));

    const renderItem = ({ item }) => {
        const isExpanded = expandedCard === item.id;

        const cardStyle = {
            borderRadius: 30,
            marginBottom: 10,
            height: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [70, isExpanded ? 270 : 70],
            }),
        };

        return (
            <TouchableOpacity onPress={() => handleCardPress(item.id)}>
                <Animated.View style={cardStyle}>
                    <Card style={{ flex: 1 }}>
                        <Card.Title
                            title={item.title}
                            subtitle={item.subtitle}
                            left={LeftContent}
                            right={() => (
                                <Button
                                    mode="text"
                                    color="pink"
                                    onPress={handlePressM}
                                >
                                    Infor
                                </Button>
                            )}
                        />
                        {isExpanded && (
                            <View style={styles.expandedContent}>
                                <Text>Xin chào</Text>
                            </View>
                        )}
                    </Card>
                </Animated.View>
            </TouchableOpacity>
        );
    };

    const handleCardPress = (id) => {
        setExpandedCard(expandedCard === id ? null : id);
    };

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: expandedCard ? 1 : 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    }, [expandedCard]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Q&A</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Find someone to share, and get advice</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>What is Stress?</Text>
        <Text style={styles.text}>
          Stress can be defined as a state of worry or mental tension caused by a difficult situation.
          Stress is a natural human response that prompts us to address challenges and threats in our lives.
        </Text>

        <Text style={styles.subtitle}>What happens when you stress?</Text>
        <Text style={styles.text}>
          When you are stressed you may have lots of different feelings, including anxiety, irritability or low self-esteem,
          which can lead you to become withdrawn, indecisive or tearful.
        </Text>

        <Text style={styles.subtitle}>Why do patients need our experienced psychological experts for support?</Text>
        <Text style={styles.text}>
          Patients need our psychological consulting because we have expertise and experience in the field of psychology.
          We provide knowledge, emotional support, and help develop personalized treatment plans to assist patients
          in overcoming psychological challenges and improving their quality of life.
        </Text>
      </ScrollView>

      <View style={styles.flatListContainer}>
        <Text style={styles.footerText}>
          Schedule an appointment with a specialist to receive assistance.
        </Text>
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
    maxHeight: 350,
  },
  scrollView: {
    maxHeight: 700,
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default AppInfor;