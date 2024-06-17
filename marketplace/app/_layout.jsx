import { Stack } from "expo-router";
import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { Text } from "react-native";
import LoginScreen from "../components/LoginScreen"

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey='pk_test_aW1tdW5lLWxpb25maXNoLTcyLmNsZXJrLmFjY291bnRzLmRldiQ'>
      <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
    </ClerkProvider>
  )
}
