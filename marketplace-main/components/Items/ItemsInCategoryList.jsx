import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import ItemsInCategory from './ItemsInCategory'

export default function ItemsInCategoryList({ itemsInCategoryList }) {

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 5, marginLeft: 5 }}>Latest Items</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={itemsInCategoryList}
                renderItem={({ item, index }) => (
                    <ItemsInCategory item={item} />
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
        borderColor: '#E5E7EB',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10
    },
    cardCategory: {
        fontSize: 15,
        color: 'gray',
        backgroundColor: '#E5E7EB',
        marginHorizontal: -5,
        marginTop: -6,
        marginBottom: 3,
        paddingLeft: 10,
        paddingVertical: 2
    }
})