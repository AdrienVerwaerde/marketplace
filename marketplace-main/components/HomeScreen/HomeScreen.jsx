import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'

export default function HomeScreen() {
    return (
        <View style={{
            display: 'flex',
            height: '100%',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 20,
        }}>
            <Header />
            <Slider />
        </View>
    )
}