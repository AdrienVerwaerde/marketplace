import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HomeScreen from '../../components/HomeScreen/HomeScreen'


export default function home() {
    return (
        <ScrollView>
            <HomeScreen />
        </ScrollView>
    )
}