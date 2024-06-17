import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function Slider({ sliderList }) {
    return (
        <View style={{ marginTop: 20}}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View>
                        <Image source={{uri:item?.image}}
                        style={{ height:200, width:330, marginRight:15, borderRadius:10, objectFit:'cover' }}
                        />
                    </View>
                )}
            />
        </View>
    )
}