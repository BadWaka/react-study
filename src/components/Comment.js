/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Comment extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
    };

    constructor() {
        super();
        this.state = {
            timeString: ''
        };
    }

    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(this._updateTimeString.bind(this), 5000);
    }

    _updateTimeString() {
        const comment = this.props.comment;
        console.log('comment', comment);
        const duration = (+Date.now() - comment.createdTime) / 1000;    // 经过时间
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        });
    }

    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username} :</span>
                </div>
                <p>&nbsp;{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeString}
                </span>
            </div>
        );
    }
}