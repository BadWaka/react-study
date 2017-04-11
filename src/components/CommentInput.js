/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {

    static propTypes = {
        onSubmit: PropTypes.func,   // 提交事件
    }

    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({
                username
            });
        }
    }

    componentDidMount() {
        this.textarea.focus();
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username}
                            // 失去焦点
                               onBlur={(e) => {
                                   localStorage.setItem('username', e.target.value);
                               }}
                               onChange={(e) => {
                                   this.setState({
                                       username: e.target.value
                                   });
                               }}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => {
                                this.textarea = textarea;
                            }}
                            value={this.state.content}
                            onChange={(e) => {
                                this.setState({
                                    content: e.target.value
                                });
                            }}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={() => {
                            if (this.props.onSubmit) {
                                const {username, content} = this.state;
                                this.props.onSubmit({username, content});
                            }
                            this.setState({
                                content: ''
                            });
                        }}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}