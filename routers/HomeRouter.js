import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import MessageLink from '../screens/MessageLink';
import AppInfor from '../screens/AppInfor';
import InforDoctor from '../screens/InforDoctor';

const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: '#FE7F9C',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="AppInfor" component={AppInfor} />
      <Stack.Screen name="MessageLink" component={MessageLink} />
      <Stack.Screen name="InforDoctor" component={InforDoctor} />
    </Stack.Navigator>
  );
};

export default HomeRouter;