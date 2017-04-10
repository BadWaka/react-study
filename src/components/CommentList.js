/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';

import Comment from './Comment';

export default class CommentList extends Component {

    static defaultProps = {
        comments: []
    };

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment={comment}/>
                    );
                })}
            </div>
        );
    }
}