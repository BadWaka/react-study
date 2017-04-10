/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username} :</span>
                </div>
                <p>&nbsp;{this.props.comment.content}</p>
            </div>
        );
    }
}