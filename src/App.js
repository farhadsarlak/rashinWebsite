import React from 'react';
import './assets/css/App.css';
import './assets/css/font.css';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop';
import MainContainer from './layout/MainContainer';


const App = () => {


  return (
    <BrowserRouter>
      <ScrollToTop>
        <MainContainer />
      </ScrollToTop>
    </BrowserRouter>
  )
}
export default App;
