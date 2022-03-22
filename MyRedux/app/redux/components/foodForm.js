import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addFood } from '../actions/food';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodForm = ({ navigation }) => {
    const [food, setFood] = useState('');
    const dispatch = useDispatch();
    const submitFood = async (food) => {
        if (food !== '') {
            const items = await AsyncStorage.getItem('name')
            const value = JSON.parse(items)
            const itemnew = [...value, { key: value.length + 1, name: food }]
            AsyncStorage.setItem('name', JSON.stringify(itemnew))
            console.log("🚀 ~ file: foodForm.js ~ line 25 ~ submitFood ~ JSON.stringify(itemnew)", JSON.stringify(itemnew))
            dispatch(addFood(food))
            setFood('')
        }

    }
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Redux</Text>
            <TextInput
                value={food}
                placeholder='Name'
                style={styles.foodInput}
                onChangeText={setFood}
            />
            <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={() => {
                    submitFood(food)
                    //setFood('')
                }}>
                <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={() => {
                    navigation.navigate('FoodList')
                }}>
                <Text style={{ fontSize: 22, color: 'white' }}>Go to Food List</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        marginBottom: 30,
        marginTop: 16,
        color: 'white'
    },
    foodInput: {
        fontSize: 24,
        marginBottom: 32,
        borderWidth: 1,
        padding: 12,
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'white'
    },

});

export default FoodForm;