import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NewFilmScreen from '../../src/components/screens/newFilm/NewFilmScreen';
import SuccesfullyScreen from '../../src/components/screens/newFilm/SuccesfullyScreen';
const StackFilm = createNativeStackNavigator();
const NewFilmStack = () => {
  return (
    <StackFilm.Navigator>
      <StackFilm.Screen
        name="NewFilmScreen"
        component={NewFilmScreen}
        options={() => ({
           title: '',
          headerShown: false,
       
         })}
      />
      <StackFilm.Screen
        name="Succesfully"
        component={SuccesfullyScreen}
        options={() => ({
           title: '',
          headerShown: false,
         })}
      />


    </StackFilm.Navigator>
  );
};
export default NewFilmStack;