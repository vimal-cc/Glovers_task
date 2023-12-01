import React from 'react';
import MainNavigation from './app/routes/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};
export default App;
