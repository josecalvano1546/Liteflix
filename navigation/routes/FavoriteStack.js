import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FavoriteScreen from '../../src/components/screens/favoriteScreen/FavoriteScreen';
const StackFavorite = createNativeStackNavigator();
const FavoriteStack = () => {
  return (
    <StackFavorite.Navigator>
      <StackFavorite.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={() => ({
          // headerTransparent: true,
           title: '',
          headerShown: false,
       
         })}
      />
    </StackFavorite.Navigator>
  );
};
export default FavoriteStack;