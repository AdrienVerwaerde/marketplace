import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ShareButton from './ShareButton';

export default function Intro({ product }) {
    const router = useRouter();

    return (
        <View>
            <View style={styles.introIcons}>
                <TouchableOpacity onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={40} color="white" />
                </TouchableOpacity>
                <Ionicons name="heart-outline" size={40} color="white" />
            </View>
            <Image source={{ uri: product.image }} style={{ width: '100%', height: 400 }} />
            <View style={styles.textContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.itemTitle}>{product.title}</Text>
                    <ShareButton product={product} />
                </View>
                <View style={{ alignItems: 'baseline', paddingBottom: 5, borderBottomWidth: 1, borderColor: '#E5E7EB' }}>
                    <Text style={styles.cardCategory}>{product.category}</Text>
                    <Text style={styles.itemPrice}>{product.price}€</Text>
                </View>
                <Text style={{ marginHorizontal: 5, marginTop: 5, fontWeight: 'bold', fontSize: 20 }}>Description</Text>
                <Text style={styles.itemDesc}>{product.desc}</Text>
            </View>
        </View>
    )
}

//Styles

const styles = StyleSheet.create({
    introIcons: {
        position: 'absolute',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20
    },
    itemTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    itemDesc: {
        fontSize: 17,
        marginHorizontal: 5,
        color: 'gray'

    },
    textContainer: {
        padding: 10,
    },
    cardCategory: {
        fontSize: 14,
        color: 'gray',
        backgroundColor: '#E5E7EB',
        borderRadius: 10,
        marginBottom: 3,
        marginHorizontal: 3,
        padding: 3,
        paddingHorizontal: 10
    },
    itemPrice: {
        fontSize: 20,
        marginHorizontal: 5,
        marginTop: 2,
        color: '#0EA5E9',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#E5E7EB'

    }
})