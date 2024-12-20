import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/Store';
import Theme from './components/Theme';
import Langue from './components/Langue';
import Notification from './components/Notification';
import Lecteur from './components/Lecteur';

const App = () => {
  return (
    <Provider store={store}>
        <div className='section1'>
          <div className='icons'>
            <Theme />
            <Notification />
          </div>
          <Langue />
        </div>
        <div className='main'>
          <Lecteur />
        </div>
        
    </Provider>
  );
};

export default App;
