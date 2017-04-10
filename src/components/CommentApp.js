/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component {
    render() {
        return (
            <div className="wrapper">
                <CommentInput/>
                <CommentList/>
            </div>
        );
    }
}
