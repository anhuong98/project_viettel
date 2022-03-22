
// import { AppRegistry } from 'react-native';
// import React from 'react';
// import App from 'I:/Huong/Desktop/MyRedux/App.js';
// import { name as appName } from 'I:/Huong/Desktop/MyRedux/app.json';
// import { Provider } from 'react-redux';

// import configureStore from './app/redux/store/configureStore';

// const store = configureStore()

// const RNRedux = () => (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => RNRedux);
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from './app/redux/store/ggAuStore';

const store = configureStore();

const ReduxTutorial = () =>
  <Provider store={store}>
    <App />
  </Provider>

AppRegistry.registerComponent(appName, () => ReduxTutorial);