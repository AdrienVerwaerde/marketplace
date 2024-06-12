import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View className="flex flex-column items-center justify-center h-full">
            <Image
                source={require('../../assets/images/fond_ciel.jpg')}
                className="w-full object-cover flex absolute"
            />
            <View className="flex flex-column justify-center items-center mx-5 z-10 p-8 bg-white rounded-3xl shadow-md">
                <Text className="text-[30px] font-bold">Airsoft Marketplace</Text>
                <Text className="text-[18px] text-slate-500 mt-6">Buy and sell airsoft gear</Text>
                <TouchableOpacity onPress={onPress} className="p-4 bg-blue-500 rounded-full mt-10">
                    <Text className="text-white text-center text-[18px]">Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}