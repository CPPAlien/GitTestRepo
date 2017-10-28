import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, Image, DeviceEventEmitter } from 'react-native';
import PTest from './bridge/TestModule'
import PTView from './bridge/PTView'

var color=0xf0f0f0;

export default class App extends React.Component {
  componentDidMount() {  
    DeviceEventEmitter.addListener('nativeCall',(msg)=>{  
         title = "React Native界面,收到数据：" + msg.mName;  
         alert(title);  
    })
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text>你好， 你好，酷家乐~</Text>
        <Image
          style={{width: 100, height: 100}} 
          source={require('./img/test.png')}/>
        <Button title = "Press Me" onPress = {() => {
          PTest.showToast('Good');
          }}/>
          <PTView 
            Text="abc"
            style={{width: 200, height: 100}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

