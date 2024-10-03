import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Jid(){
    return(
        <View style={{flexDirection : "column", justifyContent: "space-around"}}>
        <View style={{flexDirection : "row" ,justifyContent: "space-around"}}>
            <Text>12:00</Text>
            <Text>13:00</Text>
            <Text>14:00</Text>
            <Text>15:00</Text>
            <Text>16:00</Text></View>
            <View style={{flexDirection : "row",justifyContent: "space-around"}}>
            
               <FontAwesome6 name="cloud-bolt" size={24} color="yellow" />
               <FontAwesome name="cloud" size={20} color="white"/>
               <FontAwesome5 name="cloud-rain" size={24} color="cyan" />
               <FontAwesome5 name="cloud-sun" size={24} color="red" />
               <FontAwesome name="sun-o" size={24} color="orange" />
               
            </View>
            
            </View>
    )
}