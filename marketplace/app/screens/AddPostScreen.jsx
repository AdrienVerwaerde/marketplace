import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from "../../firebaseConfig"
import { collection, getDocs, getFirestore } from "firebase/firestore"

export default function AddPostScreen() {

  const db = getFirestore(app)
  const [categoryList, setCategoryList] = useState([]);
  (()=>{
    categoryList();
  })

  useEffect(()=>{
    getCategoryList();
  }, [])

  /**
   * Used to get the list of categories from Firebase
   */

  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, 'Category'));

    querySnapshot.forEach((doc)=>{
      console.log("Docs:",doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    })

  }
  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  )
}