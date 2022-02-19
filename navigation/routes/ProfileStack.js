import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from '../../src/components/screens/profile/Profile';
const StackProfile = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <StackProfile.Navigator>
      <StackProfile.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          // headerTransparent: true,
           title: '',
          headerShown: false,
       
         })}
      />
    </StackProfile.Navigator>
  );
};
export default ProfileStack;