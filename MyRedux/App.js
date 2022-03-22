//count

// import React, { Component } from 'react';
// import ConnectApp from './app/redux/index'


// class App extends Component {
//   render () {
//     return (
//       <ConnectApp/>
//     )
//   }
    
   
// };
//  export default App



///foodList
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import FoodForm from './app/redux/components/foodForm';
// import FoodList from './app/redux/components//foodList';
// import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
// const Stack = createStackNavigator();

// export default AppStack = () =>
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="FoodForm"
//         component={FoodForm}
//         options={{
//           title: 'Cheetah Coding',
//           headerTintColor: 'orange',
//           headerStyle: {
//             backgroundColor: 'black'
//           }
//         }}
//       />
//       <Stack.Screen
//         name="FoodList"
//         component={FoodList}
//         options={{
//           headerTintColor: 'orange',
//           headerStyle: {
//             backgroundColor: 'black'
//           }
//         }}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>

//GgAuthetic
import React, {useState} from 'react'
import 'react-native-gesture-handler';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstPage from './app/pages/FirstPage';
import SecondPage from './app/pages/SecondPage';
import ThirdPage from './app/pages/ThirdPage';
const Stack = createStackNavigator();
function Home () {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "FirstPage" component={FirstPage} options={{headerShown : false}}/>
      <Stack.Screen name = "SecondPage" component={SecondPage} options={{headerShown : false}} />
      </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home} options={{headerShown : false}} />
        <Stack.Screen name = 'ThirdPage' component={ThirdPage} options={{headerShown : false}}/>
      </Stack.Navigator>
     
    </NavigationContainer>
    
  );
}
export default App