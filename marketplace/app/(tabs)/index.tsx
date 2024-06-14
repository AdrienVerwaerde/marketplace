import React from 'react'
import { Image, StyleSheet, Platform, StatusBar, View, Text } from 'react-native';
import LoginScreen from '../screens/LoginScreen'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './_layout'
import AddPostScreen from '../screens/AddPostScreen';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_aW1tdW5lLWxpb25maXNoLTcyLmNsZXJrLmFjY291bnRzLmRldiQ'>
      <View>
        <StatusBar />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
            </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
//   title: {
//     textAlign: 'center',
//     marginTop: 300,

//   }
// });
