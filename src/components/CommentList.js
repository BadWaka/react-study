/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

export default class CommentList extends Component {

    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func,
    };

    static defaultProps = {
        comments: [],
    };

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return (
                        <Comment key={i}
                                 comment={comment}
                                 index={i}
                                 onDeleteComment={this.handleDeleteComment.bind(this)}/>
                    );
                })}
            </div>
        );
    }
}