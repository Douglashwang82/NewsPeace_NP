// external libs
import React from 'react';
import { MyNavbar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// my components
import AddCommentPage from './components/addCommentPage/AddComment';
import OpBar from './components/opBar/OpBar';
import Comment from './components/comment/Comment';
import MainPage from './components/mainpage/MainPage';
import CommentPage from './components/commentPage/CommentPage';
function App() {
  return (
    <>
    {/* Components */}
    <MainPage/>
    <AddCommentPage></AddCommentPage>
    <CommentPage />
    {/*  Component End*/}
    </>
  );
}

export default App;
