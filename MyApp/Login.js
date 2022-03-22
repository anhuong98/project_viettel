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
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const userInfo = [
    { id: '0', name: 'An', pass: 'An@123', mail: 'An90@gmail.com' },
    { id: '1', name: 'Binh', pass: 'Binh@123', mail: 'binh99@gmail.com' },
    { id: '2', name: 'Cuong', pass: 'Cuong@123', mail: 'cuong89@gmail.com' },
]
const Login = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [rightIcon, setRightIcon] = useState('eye-off');
    const [passIcon, setPassIcon] = useState('eye-off');
    const [rightConfirmIcon, setRightConfirmIcon] = useState('eye-off');
    const [confirmPassVisibility, setConfirmPassVisibility] = useState(true);
    const [passVisibility, setPassVisibility] = useState(true);
    const [passResVisibility, setPassResVisibility] = useState(true);
    const [exampleState, setExampleState] = useState(userInfo)
    const [modalVisible, setModalVisible] = useState(false);
    const [value, setValueBar] = useState('');
    const [colorPass, setColor] = useState('red')
    const handledPasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPassVisibility(!passVisibility)
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPassVisibility(!passVisibility);
        }
    };
    const handledConfirmPasswordVisibility = () => {
        if (rightConfirmIcon === 'eye') {
            setRightConfirmIcon('eye-off');
            setConfirmPassVisibility(!confirmPassVisibility)
        } else if (rightConfirmIcon === 'eye-off') {
            setRightConfirmIcon('eye');
            setConfirmPassVisibility(!confirmPassVisibility);
        }
    };
    const handledPassRes = () => {
        if (passIcon === 'eye') {
            setPassIcon('eye-off');
            setPassResVisibility(!passResVisibility)
        } else if (passIcon === 'eye-off') {
            setPassIcon('eye');
            setPassResVisibility(!passResVisibility);
        }
    };
    const userNameInputRef = createRef()
    const userEmailInputRef = createRef();
    const userNewEmailInputRef = createRef();
    const passRef = createRef();
    const newPassRef = createRef();
    const confirmRef = createRef();
    
    const userLogin = () => {
        const i = exampleState.findIndex(x => x.mail === userEmail)
        if (i == -1) { //khong co trong login
            alert("You do not have account, please register!")
        } else { //co trong login
            const p = exampleState.findIndex(x => x.mail === userEmail && x.pass === password)
            if (p == -1) {
                alert("Username or password is wrong!")
            } else {
                alert(userEmail + ' login successfully!')

            }
        }
    }
    const addUser = () => {
        if (userName === '' || newPassword === '' || confirmPass === '' || newUserEmail === '') {
            alert("Name or Password or ConfirmPassword or Mail is empty")
        } else {
            const i = exampleState.findIndex(x => x.mail === newUserEmail)
        if (i == -1) {
            if (newPassword === confirmPass) {
                exampleState.push({ id: exampleState.length + 1, name: userName, pass: newPassword, mail: newUserEmail })
                setExampleState(exampleState)
                alert("Register is successfully!")
            } else {
                alert("Password doesn't match")
            }

        } else {
            alert('Mail already exist.')
        }
        }
        
    }
    const handleForgotPass = () => {
        if (userEmail === '') {
            alert("Please enter email")
        } else {
            const i = exampleState.findIndex(x => x.mail === userEmail)
            if (i == -1) {
                alert("User doesn't exist")
            } else {
                const pa = exampleState.find(x => x.mail === userEmail)
                alert(pa.pass)
            }
        }
        
    }
// Mật khẩu dài ít nhất 8 ký tự ( ?=.{8,}).
// Mật khẩu có ít nhất một chữ cái viết hoa ( ?=.*[A-Z]).
// Mật khẩu có ít nhất một chữ cái thường ( ?=.*[a-z]).
// Mật khẩu có ít nhất một chữ số ( ?=.*[0-9]).
// Mật khẩu có ít nhất một ký tự đặc biệt ( [^A-Za-z0-9]).
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

    const setFontBar = () => {
  
        if(strongPassword.test(newPassword)) {
            setValueBar('Strong')
          setColor('green')
        } else if(mediumPassword.test(newPassword)) {
            setValueBar('Medium')
          setColor('orange')
        } else {
            setValueBar('Weak')
             setColor('red')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View key={'container'} style={styles.container}>
                    <View key={'image'}
                        alignItems='center'
                    >
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEqHXwSz1u8Netep301Mkuu9thY6WisMW8SQ&usqp=CAU' }}
                            style={{ width: 100, height: 100 }} />
                    </View>
                    <View key={'TxtBtn'}>
                        <Text key={'Title'} style={styles.titleStyle}>
                            Welcome
                        </Text>
                        <KeyboardAvoidingView enabled>
                            <View style={styles.textInputStyle}>
                                <TextInput
                                    style={{ flex: 1, color: '#413E4F' }}
                                    onChangeText={
                                        (UserEmail) => setUserEmail(UserEmail)
                                    }
                                    underlineColorAndroid="#413E4F"
                                    placeholder="Email"
                                    placeholderTextColor="grey"
                                    autoCapitalize="sentences"
                                    keyboardType="email-address"
                                    ref={userEmailInputRef}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        userEmailInputRef.current &&
                                        userEmailInputRef.current.focus()
                                    }
                                    blurOnSubmit={false}
                                />
                            </View>
                            <View style={styles.textInputStyle}>
                                <TextInput
                                    style={{ flex: 1, color: '#413E4F' }}
                                    onChangeText={(password) => setPassword(password)}
                                    underlineColorAndroid="#413E4F"
                                    secureTextEntry={passVisibility}
                                    placeholder="Password"
                                    placeholderTextColor="grey"
                                    autoCapitalize="sentences"
                                    ref={passRef}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>
                                        passRef.current &&
                                        passRef.current.focus()
                                    }
                                    blurOnSubmit={false}
                                />
                                <Icon name={rightIcon}
                                    size={20}
                                    onPress={handledPasswordVisibility}
                                />

                            </View>
                            <TouchableOpacity
                                style={styles.buttonStyle}
                                activeOpacity={0.5}
                                onPress={userLogin}>
                                <Text style={styles.buttonTextStyle}>
                                    LOGIN
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.button}>
                                <TouchableOpacity key={'register'}
                                    onPress={() => setModalVisible(true)}>
                                    <Text style={styles.register}>Register</Text>
                                </TouchableOpacity>
                                <Modal key={'modalRegister'}
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <View key={'viewModal'} style={styles.container}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Image source={{ uri: 'https://media.istockphoto.com/vectors/vector-illustration-register-now-speech-bubble-label-vector-id1303860322?k=20&m=1303860322&s=612x612&w=0&h=NNHlX8Q70qgc4Jcn-urDs5L1VhXwjaJWz_ypdxzNRc4=' }}
                                                style={{ width: 100, height: 100 }} />
                                        </View>
                                        <KeyboardAvoidingView enabled>
                                            <View style={styles.textInputStyle}>
                                                <TextInput
                                                    style={{ flex: 1, color: '#413E4F' }}
                                                    onChangeText={(NewUserName) => setUserName(NewUserName)}
                                                    underlineColorAndroid="#413E4F"
                                                    placeholder="Name"
                                                    placeholderTextColor="grey"
                                                    autoCapitalize="sentences"
                                                    ref={userNameInputRef}
                                                    returnKeyType="next"
                                                    onSubmitEditing={() =>
                                                        userNameInputRef.current &&
                                                        userNameInputRef.current.focus()
                                                    }
                                                    blurOnSubmit={false}
                                                />
                                            </View>
                                            <View style={styles.textInputStyle}>
                                                <TextInput
                                                    style={{ flex: 1, color: '#413E4F' }}
                                                    onChangeText={(newPassword) => {setNewPassword(newPassword); setFontBar(newPassword) }}
                                                   
                                                    underlineColorAndroid="#413E4F"
                                                    secureTextEntry={passResVisibility}
                                                    placeholder="Password"
                                                    placeholderTextColor="grey"
                                                    autoCapitalize="sentences"
                                                    ref={newPassRef}
                                                    returnKeyType="next"
                                                    onSubmitEditing={() =>
                                                        newPassRef.current &&
                                                        newPassRef.current.focus()
                                                    }
                                                    blurOnSubmit={false}
                                                />

                                                <Icon name={passIcon}
                                                    size={20}
                                                    onPress={handledPassRes}
                                                />

                                            </View>
                                            <Text style={{ marginLeft: 300, fontSize: 12,color: colorPass}} >{value}</Text>
                                            <View style={styles.textInputStyle}>
                                                <TextInput
                                                    style={{ flex: 1, color: '#413E4F' }}
                                                    onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
                                                    underlineColorAndroid="#413E4F"
                                                    secureTextEntry={confirmPassVisibility}
                                                    placeholder="Confirm  Password"
                                                    placeholderTextColor="grey"
                                                    autoCapitalize="sentences"
                                                    ref={confirmRef}
                                                    returnKeyType="next"
                                                    onSubmitEditing={() =>
                                                        confirmRef.current &&
                                                        confirmRef.current.focus()
                                                    }
                                                    blurOnSubmit={false}
                                                />
                                                <Icon name={rightConfirmIcon}
                                                    size={20}
                                                    onPress={handledConfirmPasswordVisibility}
                                                />
                                            </View>
                                            <View style={styles.textInputStyle}>
                                                <TextInput
                                                    style={{ flex: 1, color: '#413E4F' }}
                                                    onChangeText={
                                                        (newUserEmail) => setNewUserEmail(newUserEmail)
                                                    }
                                                    underlineColorAndroid="#413E4F"
                                                    placeholder="Email"
                                                    placeholderTextColor="grey"
                                                    autoCapitalize="sentences"
                                                    keyboardType="email-address"
                                                    ref={userNewEmailInputRef}
                                                    returnKeyType="next"
                                                    onSubmitEditing={() =>
                                                        userNewEmailInputRef.current &&
                                                        userNewEmailInputRef.current.focus()
                                                    }
                                                    blurOnSubmit={false}
                                                />
                                            </View>
                                            <TouchableOpacity
                                                style={styles.buttonStyle}
                                                activeOpacity={0.5}
                                                onPress={addUser}>
                                                <Text style={styles.buttonTextStyle}>
                                                    REGISTER
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.buttonStyle}
                                                onPress={() => setModalVisible(!modalVisible)} >
                                                <Text style={styles.buttonTextStyle}>Back to LOGIN</Text>
                                            </TouchableOpacity>
                                        </KeyboardAvoidingView>
                                    </View>
                                </Modal>
                                <TouchableOpacity key={'forgotPass'}
                                    onPress={handleForgotPass}
                                >
                                    <Text style={styles.forgotPass}>Forgot password?</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )

}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'blue'
    },
    textInputStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#51D8C7',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#51D8C7',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    register: {
        marginTop: 10,
        marginLeft: 35,
        color: 'orange',
    },
    forgotPass: {
        marginTop: 10,
        marginLeft: 170,
        color: 'blue',
    },
    
});