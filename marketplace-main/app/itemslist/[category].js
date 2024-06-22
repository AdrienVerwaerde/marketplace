import { View, Text, ActivityIndicator, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ItemsInCategoryList from '../../components/Items/ItemsInCategoryList';
import { FontAwesome } from '@expo/vector-icons';

export default function ItemList() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search in');

    useEffect(() => {
        if (category) {
            setSearchPlaceholder(`Search in ${category}`);
        }

        navigation.setOptions({
            headerShown: true,
            headerTitle: category
        })
        params && getItemListByCategory();
    }, [params])

    const getItemListByCategory = async () => {
        setItemList([]);
        setLoading(true)
        const q = query(collection(db, 'UserPost'), where('category', '==', params.category));
        const snapshot = await getDocs(q);
        setLoading(false)
        snapshot.forEach(doc => {
            setItemList(itemList => [...itemList, {id:doc?.id, ...doc.data()}]);
            setLoading(false)
        })
    }
    return (
        <View style={{padding:10, backgroundColor:'#fff', height:'100%'}}>

            {/* Searchbar */}
            <View style={styles.searchbarContainer}>
                <TextInput 
                placeholder={searchPlaceholder}
                style={{ width: '90%', fontSize: 17, color: 'black' }} 
                selectionColor={'grey'} 
                onChangeText={(value)=>console.log(value)} />
                <FontAwesome name="search" size={20} color="gray" />
            </View>
            {loading ?
                <ActivityIndicator style={{marginTop: 20}} size={'large'} color={'#3b82f6'} />
                :
                itemList?.length > 0 ? <ItemsInCategoryList itemsInCategoryList={itemList}
                    heading={''} />
                    : <Text>No Post Found</Text>}
                
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