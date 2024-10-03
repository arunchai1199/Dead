import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import { FontAwesome, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'; // Ensure you import your icons correctly

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function WeatherForecast() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            {/* Additional content can go here */}
        </View>
    );
}

function Jona() {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "yellow", tabBarInactiveTintColor: "gray" }}>
            <Tab.Screen 
                name="Weather Forecast"
                component={WeatherForecast}
                options={{
                    tabBarLabel: "Weather Forecast",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="sun-o" color={color} size={size} />),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

function Jid() {
    return (
        <View style={{ flexDirection: "column", justifyContent: "space-around", flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Text>12:00</Text>
                <Text>13:00</Text>
                <Text>14:00</Text>
                <Text>15:00</Text>
                <Text>16:00</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <FontAwesome6 name="cloud-bolt" size={24} color="yellow" />
                <FontAwesome name="cloud" size={20} color="white" />
                <FontAwesome5 name="cloud-rain" size={24} color="cyan" />
                <FontAwesome5 name="cloud-sun" size={24} color="red" />
                <FontAwesome name="sun-o" size={24} color="orange" />
            </View>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Jona" component={Jona} options={{ title: 'Weather App' }} />
                <Stack.Screen name="Jid" component={Jid} options={{ title: 'Forecast Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
