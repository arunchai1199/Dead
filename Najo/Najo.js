import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Jid from '../components/Jid';
import Cove from '../components/Cove';




export default function Najo() {
  return (
    <View style={{flex: 1,backgroundColor : '#673ab7'}}>
      
      <Cove/>
      
      <View style={{ margin : 30 , padding : 50,borderWidth :4 ,borderColor: '#000000', borderRadius : 15 ,backgroundColor : '#d9ccc9'}}>
      <Text style={{ fontSize: 18, textAlign: 'left', marginBottom: 20 }}>
          Weather forecast
        </Text>
        <Jid/>
</View>
      
       
    </View>
  );
}