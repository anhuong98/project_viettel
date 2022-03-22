import React, {useState} from 'react'
import 'react-native-gesture-handler';
// import {NavigationContainer, TabActions} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
// import ThirdPage from './pages/ThirdPage';
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// function Home () {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name = "FirstPage" component={FirstPage} options={{headerShown : false}}/>
//       <Stack.Screen name = "SecondPage" component={SecondPage} options={{headerShown : false}} />
//       </Stack.Navigator>
//   )
// }
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name = 'Home' component={Home} options={{headerShown : false}} />
//         <Stack.Screen name = 'ThirdPage' component={ThirdPage} options={{headerShown : false}}/>
//       </Stack.Navigator>
     
//     </NavigationContainer>
    
//   );
// }
import FlatListText from './FlatListAndText'

const App = () => {
     return(
       <FlatListText />
    )

  }

 export default App

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {press: 'Button',
//                   count: 0,
//                 reset: 'Reset'}
//   }
//   onPress = () => {
//     this.setState({ count: this.state.count + 1 ,
//                   press: 'Da cham lan '})
//   }
//   onReset = () => {
//     this.setState({count: 0,
//     press: 'Button'})
//   }
//   render() {
//     return (
//       <View style = {styles.container}>
//         <TouchableOpacity onPress = {this.onPress}>
//           <View style={styles.press}>
//             <Text>{this.state.count ? this.state.press + this.state.count : this.state.press}</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress = {this.onReset}>
//           <View style = {styles.reset}>
//               <Text>{this.state.reset}</Text>
//           </View>
//         </TouchableOpacity>
        
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   press: {
//     alignItems: 'center',
//     backgroundColor: 'grey',
//     padding: 10
//   },
//   reset: {
//     alignItems: 'center',
//     backgroundColor: 'red',
//     padding: 10
//   }
// })

//export default App