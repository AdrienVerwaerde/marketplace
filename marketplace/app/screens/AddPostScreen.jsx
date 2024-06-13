import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from "../../firebaseConfig"
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Formik } from 'formik'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { useUser } from '@clerk/clerk-expo';

export default function AddPostScreen() {

  const [image, setImage] = useState(null);
  const storage = getStorage();
  const {user} = useUser();
  const db = getFirestore(app)
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, [])

  /**
   * Used to get the list of categories from Firebase
   */
  const getCategoryList = async () => {
    const querySnapshot = await getDocs(collection(db, 'Category'));
    const categories = [];
    querySnapshot.forEach((doc) => {
      categories.push(doc.data());
    });
    setCategoryList(categories);
  };

  /**
   * Used to get images from the gallery
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onSubmitMethod = async(value) => {

    //Convert URI to Blob file
    const resp = await fetch(image);
    const blob = await resp.blob();
    const storageRef = ref(storage, 'communityPost/'+Date.now()+".jpg");
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }).then((resp)=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
        value.image=downloadUrl;
        value.userName = user.fullName;
        value.userEmail = user.primaryEmailAddress.emailAddress;
        value.userImage = user.imageUrl;
    
    //Create post in UserPost db collection
        const docRef = await addDoc(collection(db,"UserPost"),value)
        if(docRef.id)
          {
            console.log("Document added")
          }
      })
    });
    
  }
  return (
    <View className="p-10">
      <Text className="text-[27px] font-bold mt-7">Add New Post</Text>
      <Text className="text-[16px] text-gray-500 mb-7">Create new post and start selling</Text>
      <Formik
        initialValues={{
          name: '',
          desc: '',
          category: '',
          adress: '',
          price: '',
          image:'',
          userName:'',
          userEmail:'',
          userImage:''
        }}
        onSubmit={value => onSubmitMethod(value)}
        validate={(values)=>{
          const errors={}
          if(!values.title)
            {
              console.log("Title not specified")
              ToastAndroid.show('You must enter an Title', ToastAndroid.SHORT)
              errors.name="You must enter a Title"
            }
            return errors
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors }) => (
          <View>
            <TouchableOpacity onPress={pickImage}>
              {image?
              <Image source={{uri:image}} style={{width:100,height:100,borderRadius:15}} />
              :
              <Image source={require('../../assets/images/placeholder-image.jpg')} style={{width:100,height:100,borderRadius:15}} />}
            </TouchableOpacity>
            <TextInput
            style={styles.input}
            placeholder='Title'
            value={values?.title}
            onChangeText={handleChange('title')}
            />
            <TextInput
            style={styles.input}
            placeholder='Description'
            value={values?.desc}
            numberOfLines={5}
            onChangeText={handleChange('desc')}
            />
            <TextInput
            style={styles.input}
            placeholder='Price'
            value={values?.price}
            keyboardType='number-pad'
            onChangeText={handleChange('price')}
            />
            <TextInput
            style={styles.input}
            placeholder='Adress'
            value={values?.adress}
            onChangeText={handleChange('adress')}
            />
            
            {/* Category Dropdown */}
            <View style={{borderWidth:1, borderRadius:10, marginTop:15}}>
            <Picker
              selectedValue={values?.category}
              onValueChange={itemValue=>setFieldValue('category', itemValue)}
              className="border-2"
              >
                {categoryList.length > 0 && categoryList?.map((item,index) => (
                  <Picker.Item key={index} label={item?.name} value={item?.name} />
                ))}
            </Picker>
            </View>
            <TouchableOpacity onPress={handleSubmit} className="p-4 bg-blue-500 rounded-full mt-10">
              <Text className="text-center text-white text-[16px] uppercase font-bold">Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    borderWidth:1,
    borderRadius:10,
    padding:10,
    paddingTop:15,
    paddingHorizontal:15,
    marginTop:10,marginBottom:5,
    textAlignVertical:'top',
    fontSize:17
  }
})