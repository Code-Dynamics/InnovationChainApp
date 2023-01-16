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
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {styles} from './style';
import {FlatList} from 'react-native-gesture-handler';
const list = [
  {
    image: images.blist,
    name: 'Crypto News',
  },
  {
    image: images.tipstrick,
    name: 'Tips And ricks',
  },
  {
    image: images.PastResults,
    name: 'Past Results',
  },
  {
    image: images.telegram,
    name: 'join on telegram',
  },
  {
    image: images.insta,
    name: 'follow on instagram',
  },
  {
    image: images.zoom,
    name: 'zoom classes',
  },
  {
    image: images.youtube,
    name: 'join on youtube',
  },
  {
    image: images.facebook,
    name: 'join facebook group',
  },
  {
    image: images.rate,
    name: 'rate and review',
  },
];

const Listitem = ({name, image, Ok}) => (
  <TouchableOpacity style={styles.Listmaincontainer} onPress={Ok}>
    <View style={styles.ListmainChildcontainer}>
      <View>
        <Image source={image} />
      </View>
      <View style={styles.listtextcontainer}>
        <Text style={styles.listtext}>{name}</Text>
      </View>
    </View>
    <View>
      <SimpleLineIcons name="arrow-right" style={styles.arrowicon} />
    </View>
  </TouchableOpacity>
);

const Statistic = () => {
  const Ok = () => {
    alert('chal raha hu');
  };
  const renderItem = ({item}) => (
    <Listitem name={item.name} image={item.image} Ok={Ok} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.bgscreen} style={styles.bg}>
        <View style={styles.hedingmaincontainer}>
          <View style={styles.settingicon}>
            <Ionicons name="settings-outline" style={styles.setticon} />
          </View>
          <View style={styles.hedingtextcontainer}>
            <Text style={styles.hedingtext}>Setting and More</Text>
          </View>
        </View>
        <View style={styles.magintop}>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => console.log(item.id)}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Statistic;
