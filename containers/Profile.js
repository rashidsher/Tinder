import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from 'react-native-vector-icons/Ionicons';

import Demo from '../assets/data/demo.js';

const Profile = ({navigation}) => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text>
                <Icon name="chevron-back" style={styles.topIconLeft} />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>
                <Icon name="ellipsis-vertical" style={styles.topIconRight} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity
            style={styles.circledButton}
            onPress={() => navigation.navigate('Settings')}>
            <Text>
              <Icon name="settings" style={styles.iconButton} />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text>
              <Icon
                name="ios-chatbubble-ellipses-outline"
                style={styles.iconButton}
              />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
