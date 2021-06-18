import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import auth from '@react-native-firebase/auth';
// import AuthStack from './AuthStack';
import AppStack from './AppStack';
// import {AuthContext} from './AuthProvider.android';

export default function Routes() {
//   const {user, setUser} = useContext(AuthContext);
//   const [initializing, setInitialing] = useState(true);

//   const onAuthStateChanged = user => {
//     setUser(user);
//     if (initializing) setInitialing(false);
//   };

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);
//   if (initializing) return null;
  return (
    <NavigationContainer>
      {/* {user ? <AppStack /> : <AuthStack />} */}
      <AppStack/>
    </NavigationContainer>
  );
}
