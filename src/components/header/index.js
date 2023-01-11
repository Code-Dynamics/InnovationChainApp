import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './style';

const Header = () => {
  return (
    <View style={styles.hedercontainer}>
      <View style={styles.sub}>
        <MaterialIcons name="keyboard-arrow-left" style={styles.hedericon} />
      </View>
      <View style={styles.sub}>
        <Text style={styles.headertititle}>Create account</Text>
      </View>
    </View>
  );
};

export default Header;
