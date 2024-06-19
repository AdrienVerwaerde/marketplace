import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function PostItem({ item }) {
    const router = useRouter();

    return (
        <TouchableOpacity 
        activeOpacity={1} 
        style={styles.itemCard}
        onPress={() => router.push('/itemdetails/'+item.id,
            {
                product:item
            }
        )}
        >
            <Image source={{ uri: item.image }}
                style={{ width: '100%', height: 180, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <View style={{ padding: 5 }}>
                <Text style={styles.cardCategory}>{item.category}</Text>
                <Text style={{ fontSize: 17, marginHorizontal: 5, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 20, marginHorizontal: 5, marginTop: 2, color: '#0EA5E9' }}>{item.price}€</Text>
            </View>
        </TouchableOpacity>
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
        fontSize:15, 
        color:'gray', 
        backgroundColor:'#E5E7EB', 
        marginHorizontal:-5, 
        marginTop:-6, 
        marginBottom:3, 
        paddingLeft:10, 
        paddingVertical:2 
    }
})