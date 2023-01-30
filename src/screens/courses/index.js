import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SlideOne, SlideTow, SlideThree, CustomTextFiel} from '../../components';
import Button from '../../components/Button';
import images from '../../services/utilites/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Course = () => {
  const navigation = useNavigation();
  const [All, setAll] = useState(true);
  const [Popular, setPopular] = useState(false);
  const [New, setNew] = useState(false);

  const AllTab = () => {
    setAll(true);
    setPopular(false);
    setNew(false);
  };
  const popularTab = () => {
    setPopular(true);
    setAll(false);
    setNew(false);
  };
  const NewTab = () => {
    setNew(true);
    setAll(false);
    setPopular(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.bgscreen} style={styles.bg}>
        <View style={styles.paidcontainer}>
          <View>
            <Text style={styles.paidcoursetex}>Paid Course</Text>
          </View>
          <View>
            <View style={styles.corseprofileimage}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={images.profile}
              />
            </View>
          </View>
        </View>
        <View style={styles.searchcontainer}>
          <CustomTextFiel
            label={'Search'}
            left={
              <TextInput.Icon
                icon={({size, color, direction}) => (
                  <FontAwesome
                    name="search"
                    style={[
                      {
                        fontSize: 20,
                        tintColor: '#fff',
                      },
                    ]}
                  />
                )}
              />
            }
            right={
              <TextInput.Icon
                icon={({size, color, direction}) => (
                  <Ionicons
                    name="ios-filter-sharp"
                    style={[
                      {
                        fontSize: 20,
                        tintColor: '#fff',
                      },
                    ]}
                  />
                )}
              />
            }
          />
        </View>
        <View style={styles.Choosecoursecontainer}>
          <View>
            <Text style={styles.paidcoursetex}>Choice your course</Text>
          </View>
          <View>
            <Text style={styles.paidcoursetex}>See all</Text>
          </View>
        </View>
        <View style={styles.tabmaincontainer}>
          <View style={styles.tabcontainer}>
            <TouchableOpacity
              onPress={AllTab}
              style={All ? styles.tabbuttonactive : styles.tabbuttonNonactive}>
              <Text style={styles.tabtext}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                Popular ? styles.tabbuttonactive : styles.tabbuttonNonactive
              }
              onPress={popularTab}>
              <Text style={styles.tabtext}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={New ? styles.tabbuttonactive : styles.tabbuttonNonactive}
              onPress={NewTab}>
              <Text style={styles.tabtext}>New</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.parentcontainerCard}>
            {All && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity
                  style={styles.cardbgcolor}
                  onPress={() => {
                    navigation.navigate('VideoScreen');
                  }}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            )}
            {Popular && (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
            {New && (
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrolpadding}>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.cardbgcolor}>
                  <View style={styles.cardcontentcontainer}>
                    <View style={styles.crdim}>
                      <Image
                        style={{width: '100%', height: '100%'}}
                        source={images.cardimage}
                      />
                    </View>
                    <View style={styles.crddetail}>
                      <Text style={styles.videoname}>
                        Lorem Ipsum is simply
                      </Text>
                      <View style={styles.crdiconncontainer}>
                        <FontAwesome name="user" />
                        <Text style={styles.hostname}>Robertson Connie</Text>
                      </View>
                      <View style={styles.cardcontentbuttoncontainer}>
                        <Text style={styles.price}>$190</Text>
                        <View style={styles.hourindication}>
                          <Text style={styles.duration}>16 hours</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Course;
