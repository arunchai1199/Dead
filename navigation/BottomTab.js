import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return(
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }}>
            <Tab.Screen
            name="Jona"
            component={HomeStack}
            options={{
              tabBarLabel: "Weather Forecast",
              tabBarIcon: ({ color, size }) => ( <FontAwesome name="sun-o" color={color} size={size} /> ),
              headerShown : false,
            }}/>
        </Tab.Navigator>
    );
}