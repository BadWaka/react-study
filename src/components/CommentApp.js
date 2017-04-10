/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {

    constructor() {
        super();
        this.state = {
            comments: []
        };
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={(comment) => {
                    if (!comment) {
                        return;
                    }
                    if (!comment.username) {
                        return alert('请输入用户名');
                    }
                    if (!comment.content) {
                        return alert('请输入评论内容');
                    }
                    this.state.comments.push(comment);
                    this.setState({
                        comments: this.state.comments
                    });
                }}/>
                <CommentList comments={this.state.comments}/>
            </div>
        );
    }
}
