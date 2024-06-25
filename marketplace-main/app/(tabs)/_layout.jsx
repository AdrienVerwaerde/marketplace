import { View, Text } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import HomeScreen from '../../components/HomeScreen/HomeScreen'

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#ffffff',
            tabBarStyle:{
                height: 60,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: '#111'
            }
            }}
            >
            <Tabs.Screen name='home'
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, marginBottom:3, fontSize:12}}>HOME</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <Entypo name="home" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name='explore'
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, marginBottom:3, fontSize:12}}>EXPLORE</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="search" size={24} color={color}/>
                )
            }}  />
            <Tabs.Screen name='addpost'
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, marginBottom:3, fontSize:12}}>ADD POST</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="post-add" size={28} color={color} />
                )
            }}  />
            <Tabs.Screen name='profile'
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, marginBottom:3, fontSize:12}}>PROFILE</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="user-circle-o" size={24} color={color} />
                )
            }}  />
        </Tabs>
    );

}