import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, orderBy } from 'firebase/firestore';
import { app } from '../firebaseConfig';
import PostItem from '../components/HomeScreen/PostItem';
import { useNavigation } from 'expo-router';

export default function LatestItemsPage() {
    const db = getFirestore(app);
    const [latestItemList, setLatestItemList] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Latest Items"
        });
        getLatestItemList();
    }, []);

    const getLatestItemList = async () => {
        setLatestItemList([]);
        const querySnapshot = await getDocs(collection(db, 'UserPost'), orderBy('createdAt', 'desc'));
        querySnapshot.forEach((doc) => {
            setLatestItemList(latestItemList => [...latestItemList, { id: doc.id, ...doc.data() }]);
        });
    };

    return (
        <View style={styles.contentContainer}>
            <FlatList
                data={latestItemList}
                numColumns={2}
                renderItem={({ item }) => (
                    <PostItem item={item} />
                )}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

// Styles

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    row: {
        justifyContent: 'space-between',
    }
});
