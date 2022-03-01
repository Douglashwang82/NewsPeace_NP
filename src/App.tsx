// external libs
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// my components
import AddCommentPage from './components/addCommentPage/AddComment';
import MainPage from './components/mainpage/MainPage';
import CommentPage from './components/commentPage/CommentPage';
function App() {
  // states
  const [topic, setTopic] = useState('Do you need to get vaccinated?');
  const [agree, setAgree] = useState(false);
  
  // handlers
  const handlerSetTopic = (temp: string) => setTopic(temp);
  const handleSetAgree = (aBool:boolean) => setAgree(aBool);
  return (
    <>
    <Router>
                <Routes>
                    <Route path="/" element = {<MainPage topic={topic} handleSetAgree={handleSetAgree}/>} />
                    <Route path="/addcomment" element = {<AddCommentPage/>} />
                    <Route path="/comment" element = {<CommentPage />} />
                </Routes>
        </Router>
    </>
  );
}

export default App;
