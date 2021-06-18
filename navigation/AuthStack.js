import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import VerifyCode from '../containers/VerifyCode';
import PhoneAuth from '../containers/PhoneAuth';
// import Splash from '../containers/Splash';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
// import {GoogleSignin} from '@react-native-community/google-signin';


const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;
  // const DrawerTab = () => {
  //   return (
  //     <Drawer.Navigator>
  //       <Drawer.Screen
  //         name="Home"
  //         component={Home}
  //         title="Home"></Drawer.Screen>
  //       <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
  //     </Drawer.Navigator>
  //   );
  // };

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

    // GoogleSignin.configure({
    //   webClientId: 'YOUR_APP_WEB_CLIENT_ID',
    // });
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'PhoneAuth';
  } else {
    routeName = 'VerifyCode';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
   
      <Stack.Screen
        name="VerifyCode"
        component={VerifyCode}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="PhoneAuth"
        component={PhoneAuth}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        //   headerLeft: () => (
        //     <View style={{marginLeft: 10}}>
        //       <FontAwesome.Button
        //         name="long-arrow-left"
        //         size={25}
        //         backgroundColor="#f9fafd"
        //         color="#333"
        //         onPress={() => navigation.navigate('Login')}
        //       />
        //     </View>
        //   ),
        })}
      />
      {/* <Stack.Screen name="splash" component={Splash} /> */}
      {/* <Stack.Screen name="reset" component={ResetPassword} /> */}
      {/* <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="drawerTab" children={DrawerTab} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
