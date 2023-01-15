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
import {SlideOne, SlideTow, SlideThree} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  // const open = () => {
  //   openDrawer();
  // };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.profilediv}>
          <TouchableOpacity
            style={styles.profileInnerdiv}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <View style={styles.proimg}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={images.profile}
              />
            </View>
            <View style={styles.profileInnerdiv}>
              <View style={styles.profilenamediv}>
                <Text style={styles.profilewellcome}>Welcome back</Text>
                <Text style={styles.profilename}>Sophia Calzoni</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={styles.icondiv}>
            <Ionicons
              name="md-notifications"
              size={28}
              style={styles.notifyicon}
            />
          </View>
        </View>
        <View style={styles.scrlmaincontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.scrolviewconatainer}>
              <View style={styles.teamimage}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.sajjad}
                />
              </View>
            </View>
            <View style={styles.scrolviewconatainer}>
              <View style={styles.teamimage}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.sajjad}
                />
              </View>
            </View>
            <View style={styles.scrolviewconatainer}>
              <View style={styles.teamimage}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.sajjad}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.maincoincontainer}>
          <View style={styles.coinmainbox}>
            <View style={styles.coinlogobg}>
              <Image source={images.BTC} />
            </View>
            <Text style={styles.coinpricetitle}>BTC price</Text>
            <Text style={styles.coinprice}>$17009.74</Text>
          </View>
          <View style={styles.coinmainbox}>
            <View style={styles.coinlogobg}>
              <Image source={images.ETH} />
            </View>
            <Text style={styles.coinpricetitle}>ETH price</Text>
            <Text style={styles.coinprice}>$17009.74</Text>
          </View>
          <View style={styles.coinmainbox}>
            <View style={styles.coinlogobg}>
              <Image source={images.BNB} />
            </View>
            <Text style={styles.coinpricetitle}>BNB price</Text>
            <Text style={styles.coinprice}>$17009.74</Text>
          </View>
          <View style={styles.coinmainbox}>
            <View style={styles.coinlogobgvect}>
              <Image source={images.Vector} />
            </View>
            <Text style={styles.coinpricetitle}>BTC price</Text>
            <Text style={styles.coinprice}>$17009.74</Text>
          </View>
        </View>
        <View style={styles.liveupdtecontainer}>
          <View>
            <Text style={styles.livehead}>Live Update</Text>
          </View>
          <View style={styles.scrlmaincontainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.liveupademaincontainer}>
                <View style={styles.livechilxontainer}>
                  <Text style={styles.liveupdate}>BNB / BUSD </Text>
                  <Text style={styles.liveupdateper}>+15%</Text>
                </View>
              </View>
              <View style={styles.liveupademaincontainer}>
                <View style={styles.livechilxontainer}>
                  <Text style={styles.liveupdate}>USTD / BUSD </Text>
                  <Text style={styles.liveupdateper}>+15%</Text>
                </View>
              </View>
              <View style={styles.liveupademaincontainer}>
                <View style={styles.livechilxontainer}>
                  <Text style={styles.liveupdate}>ETH / BUSD </Text>
                  <Text style={styles.liveupdateper}>+15%</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
