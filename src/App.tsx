// external libs
import React from 'react';
import { MyNavbar, MyFooter } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// moy components
import Topic from './components/topic/Topic';
import Selection from './components/selection/Selectione';

function App() {
  return (
    <>
    {/* Components */}
    <MyNavbar />
    <Topic></Topic>
    <Selection></Selection>
    <MyFooter />
    {/*  Component End*/}
    </>
  );
}

export default App;
