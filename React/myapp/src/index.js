import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
// import {createStore} from "redux"
// import { Provider } from 'react-redux';
// import reducerMovie from './components/movies/reducerMovie';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const appStore=createStore(reducerMovie)

root.render(
  <BrowserRouter> 
 {/* <Provider store={appStore}> */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
 {/* </Provider>  */}
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
