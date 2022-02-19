import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import TabNavigation from './navigation/TabNavigation';
// Reference Navigation
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  useEffect(()=>{
    // Hiden status bar
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  },[])
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
