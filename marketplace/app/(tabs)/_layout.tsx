import { View, Text } from 'react-native'
import React from 'react'
import ExploreScreen from '../screens/ExploreScreen'
import AddPostScreen from '../screens/AddPostScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarActiveTintColor:'#000000',
            }}>
            <Tab.Screen name='home' component={HomeScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,marginBottom:3,fontSize:12}}>HOME</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <Entypo name="home" size={24} color={color}/>
                )
            }} />
            <Tab.Screen name='explore' component={ExploreScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,marginBottom:3,fontSize:12}}>EXPLORE</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="search" size={24} color={color}/>
                )
            }}  />
            <Tab.Screen name='addpost' component={AddPostScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,marginBottom:3,fontSize:12}}>ADD POST</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <MaterialIcons name="post-add" size={28} color={color} />
                )
            }}  />
            <Tab.Screen name='profile' component={ProfileScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,marginBottom:3,fontSize:12}}>PROFILE</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <FontAwesome name="user-circle-o" size={24} color={color}/>
                )
            }}  />
        </Tab.Navigator>
    );
}