// external libs
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Button } from "@material-ui/core";
// my components
import AddComment from './components/addComment/AddComment';
import Topic from './components/topic/Topic';
import SubmitSkip from './components/submitSkip/SubmitSkip';
import Selection from './components/selection/Selection';
import Comment from './components/comment/Comment';
import OpBar from './components/opBar/OpBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Trail, animated} from 'react-spring';
import { MyNavbar } from './components';
function App() {
  // data
  const mockComments = ["first Comment", "Second Comment", "Third Comment"];
  const yesVote = 60;

  // state
  const [topic, setTopic] = useState('Do you need to get vaccinated?');
  const [agree, setAgree] = useState(false);
  const [userComment, setUserComment] = useState<string[]>([]);
  const [currentState, setCurrentState] = useState(0)
  const [currentUserComment, setCurrentUserComment] = useState("");
  const [currentUserYesVote, setCurrentUserYesVote] = useState(0);
  const [currentUserTotalVote, setCurrentUserTotalVote] = useState(0);
  const [pageState, setPageState] = useState(0);
  // handlers
  const handleTopic = (temp: string) => {
    setTopic(temp);
    console.log("Current Topic:", temp);
  };
  const handleAgree = (aBool: boolean) => {
    setAgree(aBool);
    handlePageStateAdd();
    console.log("Yes/No state:", aBool);
  };
  const handleUserComment = (stringList: string[]) => setUserComment(stringList);
  const handleCurrentUserComment = (currentUserComment: any) => setCurrentUserComment(currentUserComment.target.value);

  const handlePostComment = (aBool: boolean) => {
    if (aBool == true) {
      // post here
      console.log("Added Comment");
    } else {
      console.log("Skip Commenting");
    }
    handlePageStateAdd();
  };

  const handlePageStateAdd = () => setPageState(pageState + 1);
  const handlePageStateSub = () => setPageState(pageState - 1)

  // fetching
  useEffect(() => {
    //fetching
    fetch('/comment', {
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      //success to logi
      .then(data => {
        const anytemp: string[] = [];
        data.forEach(function (element: any) {
          anytemp.push(element.CommentContent);
        })
        setUserComment(anytemp);
      })
      .catch(function (err) {
        console.log(`err ${err}`);
        alert("wrong info in demont");
      });
    console.log("Fetching Act");

    fetch('/topic', {
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(data => {
        console.log("topic", data);
        setCurrentUserTotalVote(data[0].TotalVote);
        setCurrentUserYesVote(data[0].YesVote);
      }).catch(function (err) {
        console.log(`err ${err}`);
        alert("wrong on topic");
      });
  }, [topic]);


  // current page
  const renderSwitch = (pageState: number) => {
    switch (pageState) {
      case 0:
        return (
          <div>
            <Selection handleAgree={handleAgree} />
          </div>)
      case 1:
        return (
          <div>
            <AddComment handleCurrentUserComment={handleCurrentUserComment} />
            <SubmitSkip handlePostComment={handlePostComment} />
          </div>)
      case 2:
        return (
          <div>
            {currentUserTotalVote ? <OpBar yes={currentUserYesVote} no={currentUserTotalVote - currentUserYesVote} /> : <div />}
            <Comment userComment={userComment} />
          </div>)
      default:
        break;
    }
  };

  return (
    <>
      <MyNavbar/>
      <Button onClick={handlePageStateSub}>123</Button>
      <Topic topic={topic} />
      {renderSwitch(pageState)}
    </>
  );
}

export default App;
