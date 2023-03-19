import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Mainpage from './pages/mainpage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {ContextProvider} from "./Context"
import Test from './pages/test';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider>
      <Helmet>
      <title>Home</title>
      <meta name="description" content="This is a portfolio website for Shreyaan Pradhan, B.Tech Computer Science Engineering. " />
      <meta name="keywords" content="Portfolio, Shreyaan, Pradhan, shreyaan.codes, Shreyaan Pradhan, VIT Vellore, B.Tech, CSE, Computer Science, Web Developer, React developer, fontend developer" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Shreyaan Pradhan" />
      <link rel="canonical" href="https://www.shreyaan.codes/" />
    </Helmet>
    <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      </ContextProvider>
    </BrowserRouter>
  </ChakraProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
