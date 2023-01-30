import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
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
import {colors} from '../../services';
import images from '../../services/utilites/images';
import {styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.drawercontain}>
      <View style={styles.profilecontainerdwer}>
        <View style={styles.profilenamediv}>
          <View style={styles.proimg}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={images.profile}
            />
          </View>
          <View style={styles.profileInnerdiv}>
            <View style={styles.profilename2}>
              <Text style={styles.profilename}>Sophia Calzoni</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.icondiv}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <MaterialIcons name="keyboard-arrow-left" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.drerliscontainer}>
        <View style={styles.singleviewlis}>
          <TouchableOpacity style={styles.listbutblack}>
            <View>
              <Image source={images.spots} />
            </View>
            <Text style={styles.dwerlistexwhite}>Spots</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleviewlisfeature}>
          <TouchableOpacity style={styles.listbut}>
            <View>
              <Image source={images.featurs} />
            </View>
            <Text style={styles.dwerlistext}>Futures</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleviewlis}>
          <TouchableOpacity style={styles.listbutblack}>
            <View>
              <Image source={images.help} />
            </View>
            <Text style={styles.dwerlistexwhite}>Help</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleviewlis}>
          <TouchableOpacity style={styles.listbutblack}>
            <View>
              <Image source={images.support} />
            </View>
            <Text style={styles.dwerlistexwhite}>support</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleviewlis}>
          <TouchableOpacity style={styles.listbutblack}>
            <View>
              <Image source={images.terms} />
            </View>
            <Text style={styles.dwerlistexwhite}>Terms & Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleviewlis}>
          <TouchableOpacity style={styles.listbutblack}>
            <View>
              <Image source={images.logout} />
            </View>
            <Text style={styles.dwerlistexwhite}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
