import React, { useState } from 'react'
import { TextInput, FlatList, View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
const dummyArray = [
    { id: '0', value: 'A', isChecked: false },
    { id: '1', value: 'B', isChecked: false },
    { id: '2', value: 'C', isChecked: false },
]
const FlatListText = () => {
    const [exampleState, setExampleState] = useState(dummyArray)
    const [textInput, setTextInput] = useState('')
    //useState(new Array(dummyArray.length).fill(false))
    const addElement = () => {
        // var newArray = [...dummyArray, { id: dummyArray.length + 1, text: textInput }]
        // setExampleState(newArray)
       
        const i = exampleState.findIndex(x => x.value === textInput)
        if (i == -1) {
            exampleState.push({ id: exampleState.length + 1, value: textInput, isChecked: false })
            setExampleState(exampleState)
        } else {
            alert('Item already exist.')
        }
    }
    // const handleOnchange = (position) => {
    //     const updatedCheckState = check.map((item, index) =>
    //         index === position ? !item : item
    //     )
    //     setChecked(updatedCheckState)

    // }
    const handleOnchange = (position, value) => {
        // const index = dummyArray.findIndex(x => x.id === position)
        // dummyArray[index].isChecked = !(dummyArray[index].isChecked)
        // setExampleState(dummyArray)
        let temp = exampleState.map((item) => {
            if (position === item.id) {
                return { ...item, isChecked: value }
            }
            return item
        })
        setExampleState(temp)
    }
    const removeElement = () => {
         var newDumArray = exampleState.filter(item => !item.isChecked)
         setExampleState(newDumArray)
        
    }
   
    const list1 = exampleState.map((item, index) =>

        <View key={index} style={styles.button}>
            <CheckBox disabled={false}
                value={item.isChecked}
                onValueChange={(value) => handleOnchange(item.id, value)}
            />
            <Text style={{ marginLeft: 100, fontSize: 22 }}>{item.value}</Text>
        </View>
    )


    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>Input</Text>
            <TextInput placeholder='Add Element'
                value={textInput}
                onChangeText={(textInput) => setTextInput(textInput)} />
            <View style={styles.button}>
                <Button color = '#0000FF'
                    title='Add element'
                    onPress={addElement}
                />
                <Button color = '#ff0000'
                    title='Remove element'
                    onPress={ removeElement}
                />
            </View>

            {list1}

            {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={exampleState}
                renderItem={({item}) => (<View><Text>{item?.value || 'test'}</Text></View>)} /> */}



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        borderWidth: 1
    },
    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
   
    check: {
        alignSelf: 'center',
        marginLeft: 10,
    }
})
export default FlatListText