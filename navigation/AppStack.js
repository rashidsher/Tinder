import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../assets/styles';
import HomeScreen from '../containers/Home';
import MatchesScreen from '../containers/Matches';
import MessagesScreen from '../containers/Messages';
import ProfileScreen from '../containers/Profile';
import SettingScreen from '../containers/setting';
import SplashScreen from '../containers/Splash';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const FeedStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="EShoping"
//       component={HomeScreen}
//       options={{
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           color: '#2e64e5',
//           fontFamily: 'Kufam-SemiBoldItalic',
//           fontSize: 18,
//         },
//         headerStyle: {
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerRight: () => (
//           <View style={{marginRight: 10}}>
//             <FontAwesome5.Button
//               name="plus"
//               size={22}
//               backgroundColor="#fff"
//               color="#2e64e5"
//               onPress={() => navigation.navigate('AddPost')}
//             />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="AddPost"
//       component={AddPostScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#2e64e515',
//           shadowColor: '#2e64e515',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//     <Stack.Screen
//       name="HomeProfile"
//       component={ProfileScreen}
//       options={{
//         title: '',
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerBackTitleVisible: false,
//         headerBackImage: () => (
//           <View style={{marginLeft: 15}}>
//             <Ionicons name="arrow-back" size={25} color="#2e64e5" />
//           </View>
//         ),
//       }}
//     />
//   </Stack.Navigator>
// );
const BottomTabs = ({navigation}) => (
  <Tab.Navigator
    tabBarOptions={
      ({
        activeTintColor: '#7444C0',
        inactiveTintColor: '#342146',
      },
      (labelStyle = {
        fontSize: 14,
        textTransform: 'uppercase',
        paddingTop: 10,
      }),
      (style = {
        backgroundColor: '#5677',
        borderTopWidth: 0,
        paddingVertical: 30,
        height: 60,
        marginBottom: 0,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOffset: {height: 0, width: 0},
      }))
    }>
    <Tab.Screen
      name="Explore"
      component={HomeScreen}
      options={({route}) => ({
        tabBarLabel: 'Explore',
        // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
          <Icon name="home-search-outline" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Matches"
      component={MatchesScreen}
      options={({route}) => ({
        tabBarLabel: 'Matches',
        // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
          <Icon name="heart" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={({route}) => ({
        tabBarLabel: 'Messages',
        // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
          <Icon name="chat" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStack}
      options={({route}) => ({
        tabBarLabel: 'Profile',
        // tabBarVisible: route.state && route.state.index === 0,
        tabBarIcon: ({color, size}) => (
          <Icon name="face-profile" color={color} size={size} />
        ),
      })}
    />
  </Tab.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      // options={({route}) => ({
      //   tabBarLabel: 'Profile',
      //   // tabBarVisible: route.state && route.state.index === 0,
      //   tabBarIcon: ({color, size}) => (
      //     <Icon name="face-profile" color={color} size={size} />
      //   ),
      // })}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={SettingScreen}
      // options={({route}) => ({
      //   title: route.params.userName,
      //   headerBackTitleVisible: false,
      // })}
    />
  </Stack.Navigator>
);

// const ProfileStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Profile"
//       component={ProfileScreen}
//       options={{
//         headerShown: false,
//       }}
//     />
//     <Stack.Screen
//       name="EditProfile"
//       component={EditProfileScreen}
//       options={{
//         headerTitle: 'Edit Profile',
//         headerBackTitleVisible: false,
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#fff',
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//       }}
//     />
//   </Stack.Navigator>
// );

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="bottomTab" component={BottomTabs} />
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
