import React from "react";
import { View, Image, Text, ImageBackground, } from "react-native";

export default function Cove() {
    return (        
        <View style={{ flexDirection: "row" }}>
            
            {/* <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("../assets/pic/LightingS.jpg")} /> */}
            <ImageBackground  style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("../assets/pic/LightingS.jpg")}>
            <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{fontSize:35, color:"white"}}>London</Text>
            <Text style={{fontSize:10, color:"lightgray"}}>Wed 11:15</Text>
            <Text style={{fontSize:5}}></Text>
            <Text style={{fontSize:15, color:"white"}}>Thunderstorm</Text>
            <Text style={{fontSize:25, color:"white"}}>28°C</Text>
            <Text style={{fontSize:15, color:"lightgray"}}>feel like 42°C</Text>
            <Text style={{fontSize:15, color:"lightgray"}}>There no Precipitation for 120 minutes</Text>

            </View>
            </ImageBackground>
            
            

        </View>
    );
}
