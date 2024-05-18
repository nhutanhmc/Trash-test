import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import HomeRouter from './routers/HomeRouter';
import MenuItems from './components/MenuItems';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Menu') {
              iconName = 'list';
            } else if (route.name === 'MessageLink') {
              iconName = 'envelope';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            backgroundColor: 'pink',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeRouter}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuItems}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}