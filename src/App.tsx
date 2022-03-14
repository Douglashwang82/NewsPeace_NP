// external libs
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// my components
import AddComment from './components/addComment/AddComment';
import MainPage from './components/mainpage/MainPage';
import CommentPage from './components/commentPage/CommentPage';
import Topic from './components/topic/Topic';
import SubmitSkip from './components/submitSkip/SubmitSkip';
import Selection from './components/selection/Selection';
import Comment from './components/comment/Comment';
import OpBar from './components/opBar/OpBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // states
  const [topic, setTopic] = useState('Do you need to get vaccinated?');
  const [agree, setAgree] = useState(false);
  const [userComment, setUserComment] = useState("")
  const [currentState, setCurrentState] = useState(0)

  // handlers
  const handleTopic = (temp: string) => setTopic(temp);
  const handleAgree = (aBool:boolean) => setAgree(aBool);
  const handleUserComment = (string: string) => setUserComment("");
  const CurrentPage = () => {
    switch(currentState){
      case 1:
        break
      default:

    }
  };
  return (
    <>
     <Topic topic={topic} />
    {/* <Selection handleAgree = {handleAgree} /> */}
    {/* <AddComment handleUserComment = {handleUserComment}/>  */}
    {/* <SubmitSkip />  */}
    {/* <OpBar /> */}
    <Comment/> 
    </>
  );
}

export default App;
