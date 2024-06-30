import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import PostItem from './PostItem'
import { useNavigation, useRouter } from 'expo-router';

export default function LatestItemList({ latestItemList }) {
    const router = useRouter();

    return (
        <ScrollView style={{ marginTop: 15 }}>
            <Text style={styles.title}>Latest Items</Text>
            <FlatList
                data={latestItemList.slice(0, 10)}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <PostItem item={item} />
                )}
            />
            <TouchableOpacity 
            activeOpacity={1}
            onPress={()=>router.push({
                pathname: '/LatestItemsPage',
                params: { latestItemList }
            })}
            style={styles.button}>
                <Text style={{fontSize: 15, textTransform: 'uppercase', fontWeight: 'bold', color: '#fff',}}>
                    View All
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

//Styles 

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    },
    button: {
        padding: 10,
        marginTop: 10,
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        backgroundColor: '#0EA5E9',
        borderColor: 'gray',
        borderRadius: 15

    }
})