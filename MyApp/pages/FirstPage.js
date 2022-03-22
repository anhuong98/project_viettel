import React, { useState, createRef } from 'react';
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
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput, Modal, Portal, Provider } from 'react-native-paper';
const userInfo = [
    { id: '0', key: 'An@123', mail: 'An90@gmail.com' },
    { id: '1', key: 'Binh@123', mail: 'binh99@gmail.com' },
    { id: '2', key: 'Cuong@123', mail: 'cuong89@gmail.com' },
]
const FirstPage = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false); //modal chọn Dựa theo tgian hay theo bộ đếm
    const [mail, setMail] = useState('');
    const [key, setKey] = useState('');
    const [colorFontMail, setColorMail] = useState('#fff');
    const [colorFontKey, setColorKey] = useState('#fff');
    const [caretIcon, setCaretIcon] = useState('caretdown');
    const [textCaret, setTextCaret] = useState('Dựa theo thời gian')
    const [exampleState, setExampleState] = useState(userInfo)
    const mailRef = createRef();
    const keyRef = createRef();
    const handledCaret = () => {
        if (caretIcon === 'caretdown') {
            setCaretIcon('caretup');
        } else if (caretIcon === 'caretup') {
            setCaretIcon('caretdown');
        }
    };
    const handleAdd = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (mail === '' || key === '') {
            alert("Cần tài khoản và khóa.")
        } else {

            if (reg.test(mail) === false) {
                alert("Tài khoản không hợp lệ.")
            } else {
                const i = exampleState.findIndex(x => x.mail === mail && x.key === key)
                if (i == -1) { //khong co trong login
                    navigation.navigate('SecondPage',{ email: mail, kkey: key, id: '' })
                } else { //co trong login
                    const p = exampleState.find(x => x.mail === mail && x.key === key)
                    navigation.navigate('SecondPage', {email: mail, kkey: key, id: p.id })

                }
            }
        }


    }
    const handleBack = () => {
        navigation.goBack()
    }
    // const ColorFontMail = () => {
    //     if (colorFontMail === '#fff') {
    //         setColorMail('transparent')
    //     } else {
    //         setColorMail('#fff')
    //     }
        
    // }
    // const ColorFontKey = () => {
    //     if (colorFontKey === '#fff') {
    //         setColorKey('transparent')
    //     } else {
    //         setColorKey('#fff')
    //     }
        
    // }
    return (
        <SafeAreaView style={styles.container}>

            <Provider>
                <View style={styles.title}>
                    <Icon name='left'
                        size={20}
                        color='white'
                        style={{ marginLeft: 20 }}
                        onPress={() => { handleBack() }}
                    ></Icon>
                    <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>
                        Nhập chi tiết tài khoản
                    </Text>
                </View>
                <View style={styles.textInputStyle}>

                    <TextInput style={{
                        flex: 1, backgroundColor: '#222222', borderRadius: 4,
                        borderWidth: 0.7, borderBottomColor: 'white', fontSize: 15
                    }}
                        label='Tài khoản'
                        onChangeText={(Email) => setMail(Email)}
                        placeholder="Tài khoản"
                        keyboardType="email-address"
                        blurOnSubmit={false}
                        dense={true}
                        selectionColor='white'
                        activeUnderlineColor='white'
                        theme={{ colors: { text: 'white' , placeholder: 'white'} }}
                        //onFocus={() => {ColorFontMail();ColorFontKey()}}
                        ref={mailRef}
                        onSubmitEditing={() =>
                            mailRef.current &&
                            mailRef.current.focus()
                        }
                    />
                </View>

                <View style={styles.textInputStyle}>
                    <TextInput style={{
                        flex: 1, backgroundColor: '#222222', borderRadius: 4,
                        borderWidth: 0.7, borderBottomColor: 'white', fontSize: 15
                    }}
                        label='Khóa'
                        onChangeText={(key) => setKey(key)}
                        placeholder="Khóa"
                        blurOnSubmit={false}
                        dense={true}
                        selectionColor='white'
                        activeUnderlineColor='white'
                        theme={{ colors: { text: 'white', placeholder: 'white'} }}
                       // onFocus={() => {ColorFontKey();ColorFontMail()}}
                        ref={keyRef}
                        onSubmitEditing={() =>
                            keyRef.current &&
                            keyRef.current.focus()
                        }
                    />

                </View>
                <View style={styles.addButton}>
                    <View >
                        <TouchableOpacity style={styles.touchModal}
                            onPress={() => { setModalVisible(!modalVisible); handledCaret('caretup') }}>
                            <Text style={{ color: '#66CCFF', borderColor: '#222222', marginLeft: 15, fontFamily: 'sans-serif', marginRight: 10, marginTop: 5, justifyContent: 'center', fontSize: 12 }}>
                                {textCaret}
                            </Text>
                            <Icon name={caretIcon}
                                color='#66CCFF'
                                marginLeft={10}
                                size={8}
                                style={{ marginTop: 9 }}
                            />
                        </TouchableOpacity>
                        <Portal>
                            <Modal
                                onDismiss={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                animationType={'slide'}
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                }}
                                style={{ justifyContent: 'flex-end' }}>

                                <View style={styles.opacityView}>
                                    <TouchableOpacity
                                        style={{ height: 25, marginTop: 2, marginLeft: 10 }}
                                        onPress={() => { setModalVisible(!modalVisible); handledCaret('caretdown'); setTextCaret('Dựa theo thời gian') }}
                                    >
                                        <Text style={{ color: 'white' }}>Dựa theo thời gian</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{ height: 25, marginTop: 2, marginLeft: 10 }}
                                        onPress={() => { setModalVisible(!modalVisible); handledCaret('caretdown'); setTextCaret('Dựa theo bộ đếm') }}
                                    >
                                        <Text style={{ color: 'white' }}>Dựa theo bộ đếm</Text>
                                    </TouchableOpacity>
                                </View>


                            </Modal>
                        </Portal>
                    </View>
                    <View key={'add'}>
                        <TouchableOpacity style={styles.touchAdd}
                            onPress={() => { handleAdd() }}
                        >
                            <Text style={{ textAlign: 'center', marginTop: 4, fontSize: 12 }}>Thêm</Text>
                        </TouchableOpacity>
                    </View>


                </View>


            </Provider>


        </SafeAreaView>
    )
}
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
    touchModal: {
        borderColor: 'white',
        marginLeft: 35,
        borderColor: 'white',
        borderWidth: 0.7,
        width: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 30,
        borderRadius: 2,
        marginTop: 20,
    },
    addButton: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    touchAdd: {
        backgroundColor: '#B9D3EE',
        color: 'black',
        marginLeft: 130,
        marginTop: 22,
        height: 25,
        width: 60,
        borderRadius: 4,
    },
    opacityView: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#222222',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.6,
        elevation: 5
    }
})
export default FirstPage