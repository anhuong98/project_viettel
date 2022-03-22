import { RNCamera } from 'react-native-camera';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Button,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Image,
    Modal
} from 'react-native';
const Camera = () => {
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});
export default Camera;