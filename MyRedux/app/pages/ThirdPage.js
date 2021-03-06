import React, { useState, createRef, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Button,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    Pressable,
    Image,
    Picker
} from 'react-native';
import { TextInput, Modal, Portal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import IconBin from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { editAccount, deleteAccount } from '../redux/actions/account';

const ThirdPage = ({ route, navigation }) => {
    const [mail, setMail] = useState(route.params.email);
    const [colorButton, setColorButton] = useState('#B9D3EE')
    const [disableButton, setDisableButton] = useState(false);
    const [displayView, setDisplayView] = useState('none');
    const [colorLabel, setColorLabel] = useState('white');
    const [modalVisible, setModalVisible] = useState(false);
    const mailRef = createRef();

    const removeItem = async () => {
        const items = await AsyncStorage.getItem('name1')
        const value = JSON.parse(items)
        const valueNew = value.filter((item) =>  item.key !== route.params.kkey)
         AsyncStorage.setItem('name1', JSON.stringify(valueNew))
        navigation.navigate('Home', { screen: 'SecondPage',params: { email: mail, kkey: route.params.kkey, id: route.params.id }  })

    }
    const handleBack = () => {
        navigation.goBack()
    }
    const changeMail = (value) => {
        if (value.length === 0) {
            setDisableButton(true)
            setColorButton('grey')
            setDisplayView('flex')
            setColorLabel('red')
        } else {
            setDisableButton(false)
            setColorButton('#B9D3EE')
            setDisplayView('none')
            setColorLabel('white')
        }
    }
    const checkMail = async () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (reg.test(mail) === false) {
            alert("T??i kho???n kh??ng h???p l???.")
        } else {
            const items = await AsyncStorage.getItem('name1')
            const value = JSON.parse(items)
            const valueNew = value.map(item => {
                if (item.key === route.params.kkey) {
                    return {
                        ...item,
                        mail: mail
                    }
                } else {
                    return { ...item }
                }
            })
            AsyncStorage.setItem('name1', JSON.stringify(valueNew))
            // navigation.navigate('Home', { screen: 'SecondPage'})
            navigation.navigate('Home', { screen: 'SecondPage', params: { email: mail, kkey: route.params.kkey, id: route.params.id } })

        }
    }
    // useEffect(() => {
    //     checkMail()
    // },[])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Icon name='left'
                    size={20}
                    color='white'
                    style={{ marginLeft: 20 }}
                    onPress={() => { handleBack() }}
                ></Icon>
                <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>
                    Ch???nh s???a t??i kho???n
                </Text>
                <IconBin
                    name='trash-bin-sharp'
                    size={20}
                    style={{ color: 'grey', marginRight: 10 }}
                    onPress={() => { setModalVisible(!modalVisible) }} />
            </View>
            <View style={styles.textInputStyle}>

                <TextInput style={{
                    flex: 1, backgroundColor: '#222222', borderRadius: 4,
                    borderWidth: 0.7, borderBottomColor: 'white', fontSize: 15
                }}
                    value={mail}
                    label='T??i kho???n'
                    onChangeText={(value) => { setMail(value); changeMail(value) }}
                    placeholder="T??i kho???n"
                    keyboardType="email-address"
                    blurOnSubmit={false}
                    dense={true}
                    selectionColor={colorLabel}
                    activeUnderlineColor='white'
                    theme={{ colors: { text: 'white', placeholder: 'grey' } }}
                    ref={mailRef}
                    onSubmitEditing={() =>
                        mailRef.current &&
                        mailRef.current.focus()
                    }
                />
            </View>
            <View style={{ display: displayView }} >
                <Text
                    style={{ color: 'red', marginLeft: 50 }}>Nh???p t??n t??i kho???n</Text>
            </View>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }}>
                <TouchableOpacity
                    disabled={disableButton}
                    style={{ backgroundColor: colorButton, width: 50, height: 30, marginRight: 35, borderRadius: 4 }}
                    onPress={() => checkMail()}
                >
                    <Text style={{ color: 'black', textAlign: 'center', marginTop: 3 }}>L??u</Text>
                </TouchableOpacity>
            </View>
            <Modal
                style={{ width: 300, height: 250, backgroundColor: '#222222', position: 'absolute', left: 60, top: 200, borderRadius: 10 }}
                onDismiss={() => {
                    setModalVisible(!modalVisible);
                }}
                animationType={'none'}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Text style={{ fontSize: 18, color: 'white', margin: 10 }}>B???n c?? ch???c ch???n mu???n x??a t??i kho???n n??y kh??ng?</Text>
                <Text style={{ fontSize: 15, color: 'white', margin: 10 }}>
                    Tr?????c khi b???n mu???n x??a t??i kho???n n??y, h??y ?????m b???o r???ng b???n c?? c??ch kh??c ????? ????ng nh???p v??o t??i kho???n. B???n c??ng c?? th???
                    t???t t??nh n??ng X??c minh 2 b?????c trong Ki???m tra b???o m???t.
                </Text>
                <View style={styles.title1}>
                    <TouchableOpacity style={styles.touch}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={{ color: '#B9D3EE' }}>H???y</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>  removeItem() }
                        style={styles.touch}>
                        <Text style={{ color: '#B9D3EE' }}>X??a t??i kho???n</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
export default ThirdPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    title: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    textInputStyle: {
        flexDirection: 'column',
        height: 55,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    title1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        justifyContent: 'flex-end'
    },
    touch: {
        marginRight: 15,
    },
})