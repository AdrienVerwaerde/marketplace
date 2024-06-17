import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default function Categories({categoryList}) {
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20}}>Categories</Text>
            <FlatList
            data={categoryList}
            numColumns={3}
            renderItem={({item, index}) => (
                <TouchableOpacity style={{ display:'flex', flex:1, alignItems:'center', justifyContent:'center', padding:10, borderWidth:2, borderColor:'gray', height:80, borderRadius:10, marginTop:10, marginHorizontal:5, backgroundColor:'#E5E7EB' }}>
                    <Image source={{uri:item.icon}} 
                    style={{ width:40, height:40 }} />
                    <Text style={{fontSize:12, marginTop:5}}>{item?.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}