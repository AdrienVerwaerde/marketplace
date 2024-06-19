import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Slider from './Slider'
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore'
import { app } from '../../firebaseConfig'
import Categories from './Categories'
import LatestItemList from './LatestItemList'

export default function HomeScreen() {

    const db = getFirestore(app);
    const [sliderList, setSliderList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [latestItemList, setLatestItemList] = useState([]);
    


    useEffect(() => {
        getSliders();
        getCategoryList();
        getLatestItemList();
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

    const getLatestItemList = async () => {
        setLatestItemList([]);
        const querySnapshot = await getDocs(collection(db, 'UserPost'), orderBy('createdAt', 'desc'));
        querySnapshot.forEach((doc) => {
            setLatestItemList(latestItemList => [...latestItemList, doc.data()]);
        })
    }

    return (
        <ScrollView style={styles.contentContainer}>
            <Header />
            <Slider sliderList={sliderList} />
            <Categories categoryList={categoryList} />
            <LatestItemList latestItemList={latestItemList} />
        </ScrollView>
    )
}

//Styles 

const styles = StyleSheet.create({
    contentContainer: {
        display: 'flex',
        height: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
    }

})