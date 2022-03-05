import React from 'react';
import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import useStyles from './styles';


const Topic: FC<{topic:string}> = ({topic}) => {
    const classes = useStyles();


    return <>
        <div className={classes.topic}>
            <Typewriter
                options={{
                    delay: 50,
                    loop:true,
                }}
                onInit={(typewriter) => {
                    typewriter.pauseFor(2500)
                    typewriter.typeString(topic)
                    typewriter.pauseFor(3000)
                    typewriter.start();
                }}
            />
        </div>
    </>
};

export default Topic;
