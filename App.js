import { StatusBar } from 'expo-status-bar';
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/Roots';


export default function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
    // <Najo />
  )
}
