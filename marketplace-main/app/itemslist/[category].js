import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ItemsInCategoryList from '../../components/Items/ItemsInCategoryList';

export default function ItemList() {
    const { params } = useRoute();
    const navigation = useNavigation();
    const { category } = useLocalSearchParams();
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
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
        <View style={{padding:10}}>
            {loading ?
                <ActivityIndicator className="mt-24" size={'large'} color={'#3b82f6'} />
                :
                itemList?.length > 0 ? <ItemsInCategoryList itemsInCategoryList={itemList}
                    heading={''} />
                    : <Text className="p-5 text-[20px] mt-24 justify-center text-center text-gray-400">No Post Found</Text>}
                
        </View>
    )
}