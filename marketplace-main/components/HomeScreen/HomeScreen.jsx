import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Slider from './Slider'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from './Categories'

export default function HomeScreen() {

    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        getSliders();
        getCategoryList();
    }, [])

    /**
     * Used to get slider images
     */
    const getSliders = async () => {
        setSliderList([])
        const querySnapshot = await getDocs(collection(db, "Slider"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setSliderList(sliderList => [...sliderList, doc.data()]);
        });
    }

    /**
    * Used to get Category List
    */
    const getCategoryList = async () => {
        setCategoryList([]);
        const querySnapshot = await getDocs(collection(db, "Category"));
        querySnapshot.forEach((doc) => {
            setCategoryList(categoryList => [...categoryList, doc.data()]);
        });
    }

    return (
        <View style={{
            display: 'flex',
            height: '100%',
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingVertical: 20,
        }}>
            <Header />
            <Slider sliderList={sliderList} />
            <Categories categoryList={categoryList} />
        </View>
    )
}