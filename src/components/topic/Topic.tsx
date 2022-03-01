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
                    delay: 50
                }}
                onInit={(typewriter) => {
                    typewriter.pauseFor(2500)
                    typewriter.typeString(topic)
                    typewriter.start();
                }}
            />
        </div>
    </>
};

export default Topic;
