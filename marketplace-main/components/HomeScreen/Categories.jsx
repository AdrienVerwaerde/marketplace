import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'


export default function Categories({categoryList}) {
    const router = useRouter();

    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontWeight:'bold', fontSize:20, marginLeft:5}}>Categories</Text>
            <FlatList
            data={categoryList}
            scrollEnabled={false}
            numColumns={3}
            renderItem={({item, index}) => (
                <TouchableOpacity 
                activeOpacity={1}
                onPress={()=>router.push('/itemslist/'+item.name)}
                style={styles.categoryIcon}>
                    <Image source={{uri:item.icon}} 
                    style={{ width:40, height:40 }} />
                    <Text style={{fontSize:12, marginTop:5}}>{item?.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

//Style

const styles = StyleSheet.create ({
    categoryIcon: {
        display:'flex', 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center', 
        padding:10, 
        height:80, 
        borderRadius:10, 
        marginTop:10, 
        marginHorizontal:5, 
        backgroundColor:'#E5E7EB'
    }
})