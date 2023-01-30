import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {colors} from '../../services';
import images from '../../services/utilites/images';
import {styles} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SuppportChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.background} style={styles.bg}>
        <View style={styles.mini}>
          <View style={styles.uperiimcon}>
            <MaterialCommunityIcons name="minus-thick" style={styles.desh} />
          </View>
        </View>
        <View style={styles.modal}>
          <View style={styles.profilediv}>
            <View style={styles.profileInnerdiv}>
              <View style={styles.proimg}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.profile}
                />
              </View>
              <View style={styles.profileInnerdiv}>
                <View style={styles.profilenamediv}>
                  <Text style={styles.profilename}>Sophia Calzoni</Text>
                  <View style={styles.profileInnerdiv}>
                    <Image
                      source={images.onlineBadge}
                      style={styles.onlineBadge}
                    />
                    <Text style={[styles.onlineText, styles.padding]}>
                      Online
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.profileInnerdiv, styles.center, styles.top]}>
            <Image source={images.grayLine} style={styles.grayLine} />
            <Text style={styles.todayText}> Today </Text>
            <Image source={images.grayLine} style={styles.grayLine} />
          </View>
          <ScrollView>
            <View>
              <View style={[styles.chatBox, styles.chatTop]}>
                <Text style={styles.message}>
                  Hi Jake, how are you? I saw on the app that we’ve crossed
                  paths several times this week 😄
                </Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>2:55 PM</Text>
              </View>
            </View>
            <View>
              <View style={styles.chatBox2}>
                <Text style={styles.message}>
                  Haha truly! Nice to meet you Grace! What about a cup of coffee
                  today evening? ☕️
                </Text>
              </View>
              <View style={[styles.time2, styles.profileInnerdiv]}>
                <Text style={styles.timeText}>3:02 PM</Text>
                <Image source={images.done} />
              </View>
            </View>
            <View>
              <View style={styles.chatBox}>
                <Text style={styles.message}>Sure, let’s do it! 😊</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>3:10 PM</Text>
              </View>
            </View>
          </ScrollView>
          <View style={[styles.msgInput, {flexDirection: 'row'}]}>
            <TextInput
              placeholder="Your message"
              style={styles.input}
              placeholderTextColor={colors.disabledBg2}
            />
            <Image source={images.chat} style={styles.chatIcon} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SuppportChat;
