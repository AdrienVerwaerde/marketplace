import { View, Text, TouchableOpacity, Share } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function ShareButton({ product }) {

    const shareProduct = () => {
        const content = {
            message: product?.image+"\n"+product?.title+"\n"+product?.desc,
        }
        Share.share(content).then(response => {
            console.log(response);
        }, (error) =>{
            console.log(error)
        })
    }

    return (
        <TouchableOpacity 
        activeOpacity={1}
        onPress={()=>shareProduct()}
        >
            <Entypo name="share" size={28} color="black" />
        </TouchableOpacity>
    )
}
