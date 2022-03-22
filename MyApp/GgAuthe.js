import React, { useState, createRef } from 'react';
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
    Modal,
    Picker
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const userInfo = [
    { id: '0', name: 'An', key: 'An@123', mail: 'An90@gmail.com' },
    { id: '1', name: 'Binh', key: 'Binh@123', mail: 'binh99@gmail.com' },
    { id: '2', name: 'Cuong', key: 'Cuong@123', mail: 'cuong89@gmail.com' },
]

const GgAuth = () => {
    const [backIcon, setBackIcon] = useState(false);
    const [modalVisible, setModalVisible] = useState(false); //modal chọn Dựa theo tgian hay theo bộ đếm
    const [mail, setMail] = useState('');
    const [key, setKey] = useState('');
    const mailRef = createRef();
    const keyRef = createRef();
    const [caretIcon, setCaretIcon] = useState('caretdown');
    const [textCaret, setTextCaret] = useState('Dựa theo thời gian')
    const [exampleState, setExampleState] = useState(userInfo)
    const [modalMainVisibility, setModalMainVisibility] =useState(false) 
    const handledCaret = () => {
        if (caretIcon === 'caretdown') {
            setCaretIcon('caretup');
        } else if (caretIcon === 'caretup') {
            setCaretIcon('caretdown');
        }
    };
    const handleAdd = () => {
        if (mail === '' || key === '') {
            alert("Cần tài khoản và khóa.")
        } else {
            const i = exampleState.findIndex(x => x.mail === mail && x.key === key)
        if (i == -1) { //khong co trong login
        } else { //co trong login
            const p = exampleState.findIndex(x => x.mail === mail && x.key === key)
            if (p !== -1) {
                setModalMainVisibility(true)
            }
        }
        }
    }
   
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Icon name='left'
                    size={20}
                    color='white'
                    style = {{marginLeft : 20}}
                    onPress={() => setModalMainVisibility(true)}
                ></Icon>
                <Text style={{ flex: 1, color: 'white', textAlign: 'center' }}>
                    Nhập chi tiết tài khoản
                </Text>
            </View>
            <View style={styles.textInputStyle}>
                
                <TextInput style={{
                    flex: 1, backgroundColor: '#222222', borderRadius: 4,
                    borderWidth: 0.7, borderBottomColor: 'white',
                }}
                    onChangeText={(mail) => setMail(mail)}
                    placeholder="Tài khoản"
                    placeholderTextColor="grey"
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    color='white'
                    ref={mailRef}
                    blurOnSubmit={false}
                    height={45}
                    keyboardType="email-address"
                    onSubmitEditing={() =>
                        mailRef.current &&
                        mailRef.current.focus()
                    }
                   
                >
                </TextInput>
            </View>

            <View style={styles.textInputStyle}>
                <TextInput style={{ flex: 1, color: '#413E4F', backgroundColor: '#222222', borderRadius: 4, borderWidth: 0.7, borderBottomColor: 'white' }}
                    onChangeText={(key) => setKey(key)}
                    placeholder="Khóa"
                    placeholderTextColor="grey"
                    color='white'
                    autoCapitalize="sentences"
                    returnKeyType="next"
                    ref={keyRef}
                    height={45}
                    blurOnSubmit={false}
                    onSubmitEditing={() =>
                        keyRef.current &&
                        keyRef.current.focus()
                    }
                    >
                </TextInput>
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
                    <Modal

                        animationType={'slide'}
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>

                        <View style={styles.opacityView}>
                            <TouchableOpacity
                                style={{ height: 25, marginTop: 2, marginLeft: 10 }}
                                onPress={() => { setModalVisible(!modalVisible); handledCaret('caretdown');setTextCaret('Dựa theo thời gian') }}
                            >
                                <Text style={{ color: 'white' }}>Dựa theo thời gian</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ height: 25, marginTop: 2, marginLeft: 10 }}
                                onPress={() => { setModalVisible(!modalVisible); handledCaret('caretdown');setTextCaret('Dựa theo bộ đếm') }}
                            >
                                <Text style={{ color: 'white' }}>Dựa theo bộ đếm</Text>
                            </TouchableOpacity>
                        </View>
                        

                    </Modal>
                </View>
                <View key={'add'}>
                    <TouchableOpacity style={styles.touchAdd}
                        onPress={handleAdd}
                    >
                        <Text style={{ textAlign: 'center', marginTop: 4, fontSize: 12 }}>Thêm</Text>
                    </TouchableOpacity>
                </View>


            </View>




        </SafeAreaView>
    )
}
export default GgAuth
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
        height: 40,
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
        shadowColor: 'yellow',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.6,
        elevation: 5
    }
})