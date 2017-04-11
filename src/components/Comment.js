/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
    }

    constructor() {
        super();
        this.state = {
            timeString: ''
        };
    }

    componentWillMount() {
        this._updateTimeString();
    }

    _updateTimeString() {
        const comment = this.props.comment;
        console.log('comment', comment);
        const duration = (+Date.now() - comment.createdTime) / 1000;    // 经过时间
    }

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