import * as React from 'react';
// import type {Node} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//views
import Home from './views/Home';
import About from './views/About';
import SideBar from './sidebar/SideBar';
// import IconTrial from './assets/IconTrial';

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#36cbef',
          width: 340,
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#4fd',
      }}
      drawerContent={props => <SideBar {...props} />}>
      {/* <Drawer.Navigator> */}
      <Drawer.Screen
        options={{
          // headerRight: () => <Text>flfkf</Text>,
          drawerIcon: tintColor => <Text style={{color: '#0e4'}}>X</Text>,
        }}
        name="Home"
        component={Home}
      />
      <Drawer.Screen
        name="About"
        component={About}
        activeTintColor= {"#fff"}
        options={{
          activeTintColor: "#fff",
          drawerIcon: ({tintColor}) => <Text style={{color: tintColor}}>X</Text>,
        }}
      />
    </Drawer.Navigator>
  );
};

// const App: () => Node = () => {
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
/*

 import React from 'react';
 import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={backgroundStyle}>
         <Header />
         <View
           style={{
             backgroundColor: isDarkMode ? Colors.black : Colors.white,
           }}>
           <Section title="Step One">
             Edit <Text style={styles.highlight}>App.js</Text> to change this
             screen and then come back to see your edits. ???
           </Section>
           <Section title="See Your Changes">
             <ReloadInstructions />
           </Section>
           <Section title="Debug">
             <DebugInstructions />
           </Section>
           <Section title="Learn More">
             Read the docs to discover what to do next:
           </Section>
           <LearnMoreLinks />
         </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 
*/
