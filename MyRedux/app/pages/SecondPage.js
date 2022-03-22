import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/AntDesign';
import IconAwe from 'react-native-vector-icons/FontAwesome';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
const userInfo = [
    { id: '0', key: 'An@123', mail: 'An90@gmail.com' }
]

const SecondPage = ({ route, navigation }) => {
    const [exampleState, setExampleState] = useState(userInfo)
    const [resetTimer, setResetTimer] = useState(false);
    const [count1, setCount] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [moreIcon, setMoreIconVisible] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState(exampleState); //filterData đc render ra màn hình qua FlatList
    const [colorText, setColorText] = useState('#33CCFF');
    const [progress, setProgress] = useState(20);
    const [indeterminate, setInderminate] = useState(true)
    const updateMail = async () => {
        const items = await AsyncStorage.getItem('name1')
        const value = JSON.parse(items)
        setExampleState(value)
        setFilterData(value)
        console.log(filterData)
    }
   
    useEffect(() => {
        updateMail();
    }, [route.params])
    const searchFilterMail = async (text) => {
        if (text) {
            //nếu hàm exampleState lọc mail có chứa ký tự được nhập từ TextInput thì set lại hàm filterData
            const newData = exampleState.filter(function (item) {
                const itemData = item.mail ? item.mail : ''
                return itemData.indexOf(text) > -1
            })

            setFilterData(newData);
            setSearch(text)
        } else {
            //còn nếu không chứa ký tự được nhập từ TextInput thì lấy mảng exampleState ban đầu chưa setFilterData
            setFilterData(exampleState)
            setSearch(text)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Provider>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <Icon name='menu'
                            color='white'
                            size={30}
                            style={{ marginLeft: 20, alignSelf: 'center' }}
                        />
                        <TextInput
                            onChangeText={(text) => searchFilterMail(text)}
                            value={search}
                            placeholder="Tìm kiếm tài khoản"
                            placeholderTextColor="grey"
                            autoCapitalize="sentences"
                            returnKeyType="next"
                            color='white'
                            blurOnSubmit={false}
                            keyboardType="email-address"
                            fontSize={15}
                            style={{ alignSelf: 'center', marginLeft: 20 }}
                        />
                        <Icon name='more-horizontal'
                            color='white'
                            size={30}
                            style={{ marginLeft: 50, alignSelf: 'center' }}
                            onPress={() => setMoreIconVisible(!moreIcon)}
                        />
                    </View>
                    {/* {list1()} */}

                    <FlatList data={filterData} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                    (<View>
                        <View style={{ marginTop: 15, marginLeft: 15, marginRight: 10, borderWidth: 0.7, borderBottomColor: 'white' }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>{item.mail}</Text>
                            <View style={styles.OTPmail}>
                                <View style={{ width: 180 }}>
                                    <Text style={{ color: '#33CCFF', fontSize: 40 }}>{1 + Math.floor(Math.random() * 1000000)}</Text>

                                </View>

                                <View style={{ marginLeft: 100, alignSelf: 'center' }}>
                                    {/* <CountdownCircleTimer
                                        alignContent={'flex-end'}
                                        strokeWidth={8}
                                        size={30}
                                        isPlaying={resetTimer}
                                        key={count1}
                                        duration={7}
                                        colors={['#F7B801', '#A37800', '#A30000']}
                                        colorsTime={[2, 1, 0]}
                                        onComplete={() => { setCount(count => count + 1); setResetTimer(true) }}
                                    /> */}
                                  
                                  <AnimatedProgressWheel
                                  key={count1}
                                  //size={50}
                                  backgroundColor='black'
                                  color={'pink'}
                                  progress = {100}
                                  animateFromValue={20}
                                  duration={5000}
                                  fill={progress}
                                  //fullColor={'red'}
                                  onAnimationComplete={() => {setCount(count1+1)}}
                                  >
                                     
                                      </AnimatedProgressWheel>  
                                      <Text style={{color:'white'}}>{progress}</Text>
                                  </View>


                            </View>
                        </View>
                    </View>)
                    } />

                    <Icon1
                        style={{ position: 'absolute', backgroundColor: 'white', bottom: 10, right: 10, borderRadius: 25 }}
                        name='pluscircle'
                        size={50}
                        onPress={() => setModalVisible(!modalVisible)}
                    />
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
                                <View style={styles.modal}>
                                    <Text style={{ alignSelf: 'center', color: 'white', right: 30 }}>Quét mã QR</Text>
                                    <TouchableOpacity
                                        style={styles.iconTouchModal}
                                    >
                                        <Icon1
                                            name='camera'
                                            size={30}
                                            style={{ alignSelf: 'center', marginTop: 9, color: '#33CCFF' }}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.modal}>
                                    <Text style={{ alignSelf: 'center', color: 'white', right: 30 }}>Nhập mã thiết lập</Text>
                                    <TouchableOpacity
                                        style={styles.iconTouchModal}
                                        onPress={() => { setModalVisible(!modalVisible); navigation.push('FirstPage') }}
                                    >
                                        <Icon1
                                            name='layout'
                                            size={26}
                                            style={{ alignSelf: 'center', marginTop: 12, color: '#33CCFF' }}
                                        />
                                    </TouchableOpacity>

                                </View>
                                <View style={styles.modal}>
                                    <TouchableOpacity
                                        style={styles.iconTouchModal}
                                        onPress={() => { setModalVisible(!modalVisible) }}
                                    >
                                        <Icon1
                                            name='close'
                                            size={30}
                                            style={{ alignSelf: 'center', marginTop: 10, color: '#33CCFF' }}

                                        />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Modal>
                    </Portal>

                    <Modal

                        style={{ width: 200, justifyContent: 'flex-start', marginLeft: 150, marginTop: 150 }}
                        onDismiss={() => {
                            setMoreIconVisible(!moreIcon);
                        }}
                        animationType={'slide'}
                        transparent={true}
                        visible={moreIcon}
                        onRequestClose={() => {
                            setMoreIconVisible(!moreIcon);
                        }}>

                        <View style={styles.moreView}>
                            <TouchableOpacity style={styles.textMoreView}
                                onPress={() => { setEditModal(!editModal) }}>
                                <Text style={{
                                    color: 'white', alignSelf: 'center', marginTop: 8,
                                    marginLeft: 10, width: 120
                                }}>Chỉnh sửa</Text>
                                <Icon1
                                    size={15}
                                    name='edit'
                                    style={{ color: 'white', marginTop: 7, marginLeft: 40 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.textMoreView}>
                                <Text style={{
                                    color: 'white', alignSelf: 'center', marginTop: 8,
                                    marginLeft: 10, width: 120
                                }}>Xuất tài khoản</Text>
                                <Icon1
                                    size={15}
                                    name='totop'
                                    style={{ color: 'white', marginTop: 7, marginLeft: 40 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.textMoreView1}>
                                <Text style={{
                                    color: 'white', alignSelf: 'center', marginTop: 8,
                                    marginLeft: 10, width: 120
                                }}>Cài đặt</Text>
                                <Icon1
                                    size={15}
                                    name='setting'
                                    style={{ color: 'white', marginTop: 7, marginLeft: 40 }} />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <Modal
                        style={{ flex: 1, alignSelf: 'flex-start', alignItems: 'flex-start', backgroundColor: 'black' }}
                        animationType={'none'}
                        transparent={true}
                        visible={editModal}
                        onRequestClose={() => {
                            setEditModal(!editModal);
                        }}>
                        <View style={styles.editView}>
                            <Icon1
                                name='check'
                                size={40}
                                color='white'
                                onPress={() => { setEditModal(!editModal); setMoreIconVisible(!moreIcon) }} />
                        </View>
                        {/* {list2()} */}

                        <FlatList data={exampleState} keyExtractor={(item) => item.id} renderItem={({ item }) =>
                        (<View>
                            <View style={{ marginTop: 15, marginLeft: 15, marginRight: 10, borderWidth: 0.7, borderBottomColor: 'white' }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>{item.mail}</Text>
                                <View style={styles.OTPmail}>
                                    <View style={{ width: 150, height: 50, flexDirection: 'row' }}>
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 5 }} />
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 10 }} />
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 10 }} />
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 20 }} />
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 10 }} />
                                        <IconAwe name='circle'
                                            size={15}
                                            style={{ alignSelf: 'center', color: 'grey', marginLeft: 10 }} />
                                    </View>

                                    <View style={{ marginLeft: 100, alignSelf: 'center', flexDirection: 'row' }}>
                                        {/* đẩy sang third page */}
                                        <Icon1
                                            name='edit'
                                            style={{ color: 'white' }}
                                            size={20}
                                            onPress={() => { navigation.navigate('ThirdPage', { email: item.mail, kkey: item.key, id: item.id }); console.log(item.key) }}
                                        />
                                        <Icon
                                            name='menu'
                                            style={{ color: 'white', marginLeft: 40 }}
                                            size={20}
                                        />
                                    </View>


                                </View>
                            </View>
                        </View>)
                        } />
                    </Modal>
                </View>
            </Provider>
        </SafeAreaView>
    )
}
export default SecondPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    title: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: '#222222',
    },
    editView: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    OTPmail: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    opacityView: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.6,
        elevation: 5,
    },

    moreView: {
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
        elevation: 5,
        borderRadius: 7,
    },
    textMoreView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 30,
        borderBottomColor: 'white',
        borderWidth: 0.3,
    },
    textMoreView1: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 30,
        borderWidth: 0.3,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    modal: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    iconTouchModal: {
        backgroundColor: 'grey',
        bottom: 10,
        right: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
    },
});
