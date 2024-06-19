import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '../../firebaseConfig';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Intro from '../../components/Items/Intro';


export default function ItemDetails() {
    const db = getFirestore(app);
    const { params } = useRoute();
    useEffect(()=>{
        console.log(params)
    })
    const { itemid } = useLocalSearchParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getItemDetailsById();
        params && setProduct(params.product);
    }, [params])

    /**
     * Used to get post details with ID
     */

    const getItemDetailsById = async () => {
        setLoading(true)
        const docRef = doc(db, 'UserPost', itemid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setProduct(docSnap.data());
            setLoading(false)
        } else {
            console.log("No such document");
        }
    }
    return (
        <View>
            {loading?
            <ActivityIndicator
            size={'large'}
            color={'#0EA5E9'}
            />:
            <View>
                <Intro product={product}/>
            </View>}
            
        </View>
    )
}