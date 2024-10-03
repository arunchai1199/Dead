import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Jona from "./Jona";
import BottomTab from "./BottomTab";

const Stack = createStackNavigator();
export default function RootStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
        <Stack.Screen name="Jona" component={Jona} options={{ title: "Jona" }} />
        </Stack.Navigator>
    );
}