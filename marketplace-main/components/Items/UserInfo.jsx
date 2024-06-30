import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function UserInfo({ product }) {
  const sendEmail = () => {
    const subject = 'Regarding '+product.title;
    const body = "Hi "+product.userName+"\n"+"I am interested in this product"
    Linking.openURL('mailto:'+product.userEmail+"?subject="+subject+"&body="+body);
  }

  return (
    <View>
      <View style={styles.contentContainer}>
        <Image source={{ uri: product.userImage }} style={{ borderRadius: 50, width: 50, height: 50 }} />
        <View style={{ margin: 5 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{product.userName}</Text>
          <Text style={{ color: 'gray' }}>{product.userEmail}</Text>
        </View>
      </View>
      <TouchableOpacity 
      onPress={sendEmail} 
      style={styles.contactContainer}
      activeOpacity={1}>
        <Text style={styles.contactButton}>
          Contact Seller
        </Text>
        <MaterialCommunityIcons name="email-send-outline" size={30} color="white" style={{margin:3}} />
      </TouchableOpacity>
    </View>
  )
}

//Styles

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#E5E7EB',
    borderColor: 'gray',
  },
  contactContainer: {
    padding: 5,
    marginTop: 10,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    backgroundColor: '#0EA5E9',
    borderColor: 'gray',
    borderRadius: 15
  },
  contactButton: {
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
  }

})