import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// DrawerItem,
import { FlipInEasyX } from 'react-native-reanimated';

const SideBar = props => {
    // const image = './assets/header.jpg'
  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={require("../assets/header.jpg")} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Audio Recording</Text>
      </ImageBackground>
      <DrawerItemList {...props} />
      {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    justifyContent: 'center',
    minHeight: 190,
    // alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 28,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SideBar;
