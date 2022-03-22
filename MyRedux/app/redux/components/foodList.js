import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from '../actions/food';

const FoodList = () => {
    const dispatch = useDispatch();
    
    const [food, setFood] = useState([])

    const deleleCurrent = (key) => {
        dispatch(deleteFood(key))
    }

    const getData = async () => {
        const items = await AsyncStorage.getItem('name')
        const value = JSON.parse(items)
        console.log("🚀 ~ file: foodList.js ~ line 23 ~ getItem ~ value", value)
        setFood(value)
    }

    useEffect(() => {
        getData();
    }, [])

    // let foods = getData();
    // console.log("🚀 ~ file: foodList.js ~ line 28 ~ FoodList ~ foods", foods)
    return (
        <FlatList style={styles.listContainer}
            data={food}
            keyExtractor={(item, index) => item.key.toString()}
            renderItem={(data) =>
            (<View>
                <View style={styles.listStyle}>
                    <Text style={styles.listText}>{data.item.name}</Text>
                    <TouchableOpacity
                        style={{ marginLeft: 100 }}
                        onPress={() => deleleCurrent(data.item.key)}>
                        <Image
                            style={styles.image}
                            source={require('I:/Huong/Desktop/MyRedux/app/asset/bin.png')}
                        />
                    </TouchableOpacity>

                </View>

            </View>)
            }
        />
    )
}
const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'black',
        padding: 16
    },
    listText: {
        fontSize: 15,
        marginLeft: 20,
        alignSelf: 'center',
        width: 50
    },
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        borderColor: 'black',
        borderWidth: 0.1,
        backgroundColor: 'white',
        height: 30
    },
    image: {
        width: 25,
        height: 25,
        marginLeft: 150,
    }
});

export default FoodList;