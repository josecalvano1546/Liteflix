import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from '../../src/components/screens/searchScreen/SearchScreen';
const StackSearch = createNativeStackNavigator();
const SearchStack = () => {
  return (
    <StackSearch.Navigator>
      <StackSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          // headerTransparent: true,
           title: '',
          headerShown: false,
       
         })}
      />
    </StackSearch.Navigator>
  );
};
export default SearchStack;