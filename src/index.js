import React from 'react';
import { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HoroscopeContext } from './context/HoroscopeContext';
import horoscopesObj from './data/horoscopes';


const HoroscopeProvider = props => {
//     const user = useContext(HoroscopeContext);
// console.log('HOROSCOPE: ', HoroscopeContext);
// console.log('USER: ', user);
const [currentSign, setCurrentSign] = useState('Leo');
const sign = horoscopesObj[currentSign];
  
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
};

const Root = () => {
  return (
    <HoroscopeProvider>
      <App />
    </HoroscopeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

