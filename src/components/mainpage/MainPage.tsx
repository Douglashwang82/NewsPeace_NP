import React from 'react';
import { FC } from 'react';
import Topic from '../topic/Topic';
import Selection from "../selection/Selection";

const MainPage: FC<{ topic: string, handleSetAgree:any }>  = ({topic, handleSetAgree}) => {

    return <div>
    <Topic topic = {topic}></Topic>
    <Selection handleSetAgree = {handleSetAgree}></Selection>
    </div>
};

export default MainPage;