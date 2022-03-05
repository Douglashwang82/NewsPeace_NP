import { FC } from 'react';
import OpBar from '../opBar/OpBar';
import Comment from '../comment/Comment';
import Topic from '../topic/Topic';
import useStyles from './styles';

const CommentPage: FC = () => {

    const classes = useStyles();

    return (
        <div className = {classes.commentPage}>
            <OpBar />
            <Comment />
        </div>
    )
};

export default CommentPage;