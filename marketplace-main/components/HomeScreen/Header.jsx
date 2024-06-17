import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {

    const { user } = useUser();

    return (
        <View style={{ marginTop: 25}}>
            {/* User info Section */}
            <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                <Image source={{ uri: user?.imageUrl }}
                    style={{ borderRadius: 50, width: 50, height: 50 }} />
                <View>
                    <Text>Welcome</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{user?.fullName}</Text>
                </View>
            </View>
            {/* Searchbar */}
            <View style={styles.searchbarContainer}>
                <TextInput placeholder='Search' style={{ width: '90%', fontSize: 17, color: 'black' }} selectionColor={'grey'} onChangeText={(value)=>console.log(value)} />
                <FontAwesome name="search" size={20} color="gray" />
            </View>
        </View>

    )
}

//Styles

const styles = StyleSheet.create({
    searchbarContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        paddingHorizontal: 15,
        marginTop: 15,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 2
    }
})