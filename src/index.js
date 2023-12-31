import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Redux 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Rootreducer from './Components/Reducer/Rootreducer';

// Redux
const store = createStore(Rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Redux Provider
  <Provider store={store}>
  
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
