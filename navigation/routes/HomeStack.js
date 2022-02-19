import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../src/components/screens/homeScreen/HomeScreen';
const StackHome = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
         // headerTransparent: true,
          title: '',
         headerShown: false,
      
        })}
      />
    </StackHome.Navigator>
  );
};
export default HomeStack;
