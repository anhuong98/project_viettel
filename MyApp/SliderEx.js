import React, { useState, Component } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
const SliderExample = () => {
    const [sliderValue, setSliderValue] = useState(15);
    const [sliderValue1, setSliderValue1] = useState(0)
    const [sliderValue2, setSliderValue2] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {/*Text to show slider value*/}
                <Text style={{ color: 'black' }}>
                    Ringtone : {sliderValue}
                </Text>

                {/*Slider with max, min, step and initial value*/}
                <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={sliderValue}
                    onValueChange={
                        (sliderValue) => setSliderValue(sliderValue)
                    }
                />
                <Text style={{ color: 'black' }}>
                    Sound : {sliderValue1}
                </Text>

                {/*Slider with max, min, step and initial value*/}
                <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={sliderValue1}
                    onValueChange={
                        (sliderValue1) => setSliderValue1(sliderValue1)
                    }
                />
                <Text style={{ color: 'black' }}>
                    Alarm : {sliderValue2}
                </Text>

                {/*Slider with max, min, step and initial value*/}
                <Slider
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="#307ecc"
                    maximumTrackTintColor="#000000"
                    step={1}
                    value={sliderValue2}
                    onValueChange={
                        (sliderValue2) => setSliderValue2(sliderValue2)
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
});

export default SliderExample;
