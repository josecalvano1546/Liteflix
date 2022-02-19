import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconTab from '../src/components/tab/IconTab';

// Import screens
import HomeStack from './routes/HomeStack';
import FavoriteStack from './routes/FavoriteStack';
import SearchStack from './routes/SearchStack';
import NewFilmStack from './routes/NewFilmStack';
import ProfileStack from './routes/ProfileStack';
import { themeApp } from '../src/styles/themeApp';
// Import icons
import Home from '../src/assets/images/iconsTab/home.png';
import HomeSelect from '../src/assets/images/iconsTab/homeSelect.png';
import Favorite from '../src/assets/images/iconsTab/favorite.png';
import FavoriteSelect from '../src/assets/images/iconsTab/favoriteSelect.png';
import NewFilm from '../src/assets/images/iconsTab/newFilm.png';
import NewFilmSelect from '../src/assets/images/iconsTab/newFilmSelect.png';
import Profile from '../src/assets/images/iconsTab/profile.png';
import ProfileSelect from '../src/assets/images/iconsTab/profileSelect.png';
import Search from '../src/assets/images/iconsTab/search.png';
import SearchSelect from '../src/assets/images/iconsTab/searchSelect.png';

// components
const Tab = createBottomTabNavigator();
console.log(themeApp.screenDimension)
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: themeApp.tabBarStyle,
        headerMode: 'float',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ navigation }) => ({
         // headerTransparent: true,
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => {
            return (
              <IconTab
                img={Home}
                imgSelect={HomeSelect}
                focused={focused}
                tiempo={200}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteStack}
        options={() => ({
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => {
            return (
              <IconTab
                img={Favorite}
                imgSelect={FavoriteSelect}
                focused={focused}
                tiempo={100}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={() => ({
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => {
            return (
              <IconTab
                img={Search}
                imgSelect={SearchSelect}
                focused={focused}
                tiempo={50}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="NewFilm"
        component={NewFilmStack}
        options={() => ({
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => {
            return (
              <IconTab
                img={NewFilm}
                imgSelect={NewFilmSelect}
                focused={focused}
                tiempo={200}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={() => ({
          headerShown: false,
          title: '',
          tabBarIcon: ({ focused }) => {
            return (
              <IconTab
                img={Profile}
                imgSelect={ProfileSelect}
                focused={focused}
                tiempo={100}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
