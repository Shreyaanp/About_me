import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Mainpage from './pages/mainpage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {ContextProvider} from "./Context"
import Test from './pages/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
