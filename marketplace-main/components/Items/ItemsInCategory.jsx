import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function ItemsInCategory({ item }) {
    const truncatedDesc = item.desc.length > 50 ? item.desc.substring(0, 50) + '...' : item.desc;
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
                style={styles.itemImage} />
            <View style={styles.textContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDesc}>{truncatedDesc}</Text>
                <Text style={styles.itemPrice}>{item.price}€</Text>
            </View>
        </TouchableOpacity>
    );
}

// Styles
const styles = StyleSheet.create({
    itemCard: {
        display: 'flex',
        flex: 1,
        margin: 5,
        borderColor: '#E5E7EB',
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderRadius: 10,
    },
    itemImage: {
        height: 150,
        width: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        objectFit: 'cover',
    },
    textContainer: {
        padding: 5,
        width: 150
    },
    itemTitle: {
        fontSize: 17,
        marginHorizontal: 5,
        fontWeight: 'bold',
    },
    itemDesc: {
        fontSize: 14,
        marginHorizontal: 5,
        flexWrap: 'wrap',
        numberOfLines: 2,
        width: '100%',
    },
    itemPrice: {
        fontSize: 20,
        marginHorizontal: 5,
        marginTop: 2,
        color: '#0EA5E9',
    }
});

