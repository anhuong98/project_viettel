import React, { useState, createRef } from 'react';
//import { useTogglePasswordVisibility } from './HidePass';
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
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Focus = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  //const { passVisibility, rightIcon, handlePassVisibility } = useTogglePasswordVisibility();
  const [rightIcon, setRightIcon] = useState('eye-off');
  const [passVisibility, setPassVisibility] = useState(true);
  const handledPasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPassVisibility(!passVisibility)
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPassVisibility(!passVisibility);
    }
  };
  const [rightConfirmIcon, setRightConfirmIcon] = useState('eye-off');
  const [confirmPassVisibility, setConfirmPassVisibility] = useState(true);
  const handledConfirmPasswordVisibility = () => {
    if (rightConfirmIcon === 'eye') {
      setRightConfirmIcon('eye-off');
      setConfirmPassVisibility(!confirmPassVisibility)
    } else if (rightConfirmIcon === 'eye-off') {
      setRightConfirmIcon('eye');
      setConfirmPassVisibility(!confirmPassVisibility);
    }
  };
  const userNameInputRef = createRef();
  const userEmailInputRef = createRef();
  const userAgeInputRef = createRef();
  const useraddressInputRef = createRef();
  const passRef = createRef();
  const confirmRef = createRef();
  const userRegisterFunction = () => {
    alert(userName + ' (' + userAge + ' ,' + userEmail + ' ,' + userAddress + ') Registered');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: 'https://media.istockphoto.com/vectors/vector-illustration-register-now-speech-bubble-label-vector-id1303860322?k=20&m=1303860322&s=612x612&w=0&h=NNHlX8Q70qgc4Jcn-urDs5L1VhXwjaJWz_ypdxzNRc4=' }}
              style={{ width: 100, height: 100 }} />
          </View>
          <View>

            <Text style={styles.titleStyle}>
              React Native Keyboard Avoiding View and Request Focus
            </Text>
            <KeyboardAvoidingView enabled>
              <View style={styles.textInputStyle}>
                <TextInput
                  style={{ flex: 1, color: '#413E4F' }}
                  onChangeText={(UserName) => setUserName(UserName)}
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
                  onChangeText={
                    (UserAge) => setUserAge(UserAge)
                  }
                  underlineColorAndroid="#413E4F"
                  placeholder="Age"
                  placeholderTextColor="grey"
                  autoCapitalize="sentences"
                  keyboardType="numeric"
                  ref={userAgeInputRef}
                  onSubmitEditing={() =>
                    userAgeInputRef.current &&
                    userAgeInputRef.current.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.textInputStyle}>
                <TextInput
                  style={{ flex: 1, color: '#413E4F' }}
                  onChangeText={
                    (UserAddress) => setUserAddress(UserAddress)
                  }
                  underlineColorAndroid="#413E4F"
                  placeholder="Address"
                  placeholderTextColor="grey"
                  autoCapitalize="sentences"
                  ref={useraddressInputRef}
                  returnKeyType="next"
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                />
              </View>
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={userRegisterFunction}>
                <Text style={styles.buttonTextStyle}>
                  REGISTER
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Focus;

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

});