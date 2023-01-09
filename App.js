import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Navigation from './src/services/config/navigation';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Navigation />;
};

export default App;
