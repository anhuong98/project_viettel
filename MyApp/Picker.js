import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Modal, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker'
const PickerExample = () => {
    const [showModal, setShowModal] = useState(false)
    const [choosenLabel, setChoosenLabel] = useState('Native')
    const [choosenIndex, setChoosenIndex] = useState('2')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={showModal}
                    onRequestClose={() => {
                        console.log('Modal has been closed.')
                    }}>
                     
                    <View style={styles.modal}>
                        <Text style={styles.text}>Choose Label</Text>
                        <Picker
                        style = {styles.picker}
                        mode= 'dropdown'
                        itemStyle = {styles.itemStyle}
                            selectedValue={choosenLabel}
                            onValueChange={(itemValue, itemIndex) => {
                                setChoosenLabel(itemValue);
                                setChoosenIndex(itemIndex);
                            }}>
                            <Picker.Item label="Hello" value="Hello" />
                            <Picker.Item label="React" value="React" />
                            <Picker.Item label="Native" value="Native" />
                            <Picker.Item label="How" value="How" />
                            <Picker.Item label="are" value="are" />
                            <Picker.Item label="you" value="you" />
                        </Picker>
                        {/*Text to show selected picker value*/}
                        <Text style={styles.text1}>
                            Selected Value: {choosenLabel}
                        </Text>
                        {/*Text to show selected index */}
                        <Text style={styles.text1}>
                            Selected Index: {choosenIndex}
                        </Text>
                        <Button
                            title="Close"
                            onPress={() => {
                                setShowModal(!showModal)
                            }}
                        />
                    </View>
                </Modal>
                <Button
                    title="Open"
                    onPress={() => {
                        setShowModal(!showModal)
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop: 30,
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 100,
    },
    text: {
        color: 'black',
        marginTop: 10,
    },
    text1: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'black',
      },
      itemStyle: {
          fontSize:15,
          height: 75,
          color: 'black',
          textAlign:'center',
          fontWeight: 'bold'
      },
      picker: {
          width: 150,
      },
})
export default PickerExample
