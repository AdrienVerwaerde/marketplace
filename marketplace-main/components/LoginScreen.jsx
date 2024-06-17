import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
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
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            alignItems: 'center'
            
        }}>
            {/* <Image source={require('../assets/images/fond_ciel.jpg')}/> */}
            <View style={styles.subContainer}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Airsoft Marketplace</Text>
                <Text style={{ fontSize: 18, color: '#555' }}>Buy and sell airsoft gear</Text>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={{ fontSize: 18, textTransform: 'uppercase', color: 'white', textAlign: 'center' }}>Get Started</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor: '#fff',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: '100%'
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        marginTop: 20,
        padding: 15,
        width: 250
    }
})