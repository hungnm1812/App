import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Favorites from './src/screens/favorites';
import HomeNavigator from './src/customNavigation';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        swipeEnabled
        initialRoute="Home"
        activeColor='rgba(255, 143, 113, 1)'
        inactiveColor='rgba(218, 218, 218, 0.2)'
        barStyle={{ backgroundColor: '#15141F', padding: 4}}
      >
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              let icon = focused === true ? require('./src/images/Home.png') : 
              require('./src/images/Home_i.png')
              return <Image source={icon} />
            }
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              let icon = focused === true ? require('./src/images/Favorite.png') : 
              require('./src/images/Favorite_i.png')
              return <Image source={icon} />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
