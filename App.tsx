import React from 'react';
import MainNavigation from './app/routes/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import HomeSample from './app/screens/HomeSample';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
