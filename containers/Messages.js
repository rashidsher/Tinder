import React from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from 'react-native';
import Message from '../components/Message';
import Icon from 'react-native-vector-icons/Entypo';

import Demo from '../assets/data/demo.js';

const Messages = () => {
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}>
      <View style={styles.containerMessages}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity>
              <Text>
                <Icon name="dots-three-vertical" style={styles.icon} />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
