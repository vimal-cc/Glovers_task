import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import MainNavigation from './app/routes/MainNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
