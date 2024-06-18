import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function LatestItemList({ latestItemList }) {


    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Latest Items</Text>
            <FlatList
                data={latestItemList}
                scrollEnabled={false}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <View style={styles.itemCard}>
                        <Image source={{ uri: item.image }}
                            style={{ width: '100%', height: 180, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                        <View style={{ padding: 5 }}>
                            <Text style={{ fontSize: 17, marginHorizontal: 5, marginTop: 2, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ fontSize: 20, marginHorizontal: 5, marginTop: -3, color: 'gray' }}>{item.price}€</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

//Styles 

const styles = StyleSheet.create({
    itemCard: {
        display: 'flex',
        flex: 1,
        margin: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 10,
    }
})