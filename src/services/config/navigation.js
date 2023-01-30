import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ACCOUNT,
  Course,
  CreatAcouunt,
  Home,
  IntroSliderScreen,
  Spot,
  Statistic,
  SuppportChat,
  PhoneNumber,
  VerifyCode,
  Videoplyer,
} from '../../screens';
import Welcome from '../../screens/welcome';
import SignIn from '../../screens/SignIn';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {colors} from '../utilites/colors';
import {sizes} from '../utilites/sizes';
import {View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../utilites/fonts';
import {styles} from './style';
import {CustomDrawer} from '../../components';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="introslder" component={IntroSliderScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Creataccount" component={CreatAcouunt} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="VideoScreen" component={Videoplyer} />

        <Stack.Screen name="Btab" component={MyTabs} />

        <Stack.Screen name="drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const MyTabs = () => {
  return (
    <Tab.Navigator
      // tabBarInactiveTintColor={}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          backgroundColor: colors.tab,
          height: sizes.screenHeight * 0.09,
          borderTopLeftRadius: sizes.screenWidth * 0.05,
          borderTopRightRadius: sizes.screenWidth * 0.05,
          paddingBottom: sizes.screenWidth * 0.05,
          color: colors.primary,
          position: 'absolute',
          borderTopColor: colors.tab,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View>
              <View style={focused ? styles.border : null}></View>

              <Foundation
                name="home"
                color={focused ? colors.primary : colors.white}
                size={fontSize.extraLarge}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          tabBarLabel: 'Statistic',
          tabBarIcon: ({focused}) => (
            <View>
              <View style={focused ? styles.border : null}></View>
              <Entypo
                name="area-graph"
                color={focused ? colors.primary : colors.white}
                size={fontSize.extraLarge}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="course"
        component={Course}
        options={{
          tabBarLabel: 'Course',
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: sizes.screenWidth * 0.1,
                height: sizes.screenHeight * 0.05,
                borderRadius: sizes.screenWidth * 0.2,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.tab,
                bottom: sizes.screenHeight * 0.02,
              }}>
              <FontAwesome5
                name="book"
                color={focused ? colors.primary : colors.white}
                size={fontSize.extraLarge}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="supporchat"
        component={SuppportChat}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({focused}) => (
            <View>
              <View style={focused ? styles.border : null}></View>

              <Entypo
                name="chat"
                color={focused ? colors.primary : colors.white}
                size={fontSize.extraLarge}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ACCOUNT}
        options={{
          tabBarLabel: 'Account',
          style: {colors: colors.white},
          tabBarIcon: ({focused}) => (
            <View>
              <View style={focused ? styles.border : null}></View>

              <MaterialCommunityIcons
                name="account"
                color={focused ? colors.primary : colors.white}
                size={fontSize.extraLarge}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Btab" component={MyTabs} />
      <Drawer.Screen name="spots" component={Spot} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default Navigation;
