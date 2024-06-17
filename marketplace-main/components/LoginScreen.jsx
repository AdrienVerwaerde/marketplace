import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

const { height } = Dimensions.get('window');

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

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
            console.error('OAuth error', err);
        }
    }, []);

    return (
        <ImageBackground
            source={require('../assets/images/fond_ciel.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.subContainer}>
                <Text style={styles.title}>Airsoft Marketplace</Text>
                <Text style={styles.subtitle}>Buy and sell airsoft gear</Text>
                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

//Styles

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    subContainer: {
        backgroundColor:'#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '90%',
        height: '30%'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 50,
        padding: 15,
        width:'75%'
    },
    buttonText: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
    },
});
