import { FC } from 'react';
import OpBar from '../opBar/OpBar';
import Comment from '../comment/Comment';
const CommentPage: FC = () => {
    return (
        <div>
            <OpBar />
            <Comment />
        </div>
    )
};

export default CommentPage;