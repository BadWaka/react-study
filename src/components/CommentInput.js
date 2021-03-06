/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func, // 提交事件
        onUserNameInputBlur: PropTypes.func
    };

    static defaultProps = {
        username: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ''
        }
    }

    componentDidMount() {
        this
            .textarea
            .focus();
    }

    handleUserNameBlur(event) {
        if (this.props.onUserNameInputBlur) {
            this
                .props
                .onUserNameInputBlur(event.target.value);
        }
    }

    handleUserNameChange(event) {
        this.setState(() => {
            return {username: event.target.value}
        });
    }

    handleContentChange(event) {
        this.setState(() => {
            return {content: event.target.value}
        });
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            this
                .props
                .onSubmit({
                    username: this.state.username,
                    content: this.state.content,
                    createdTime :+ new Date()
                });
        }
        this.setState({content: ''});
    }

    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.username} // 失去焦点
                            onBlur={this
                            .handleUserNameBlur
                            .bind(this)} onChange={this
                            .handleUserNameChange
                            .bind(this)}/>
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
                            onChange={this
                            .handleContentChange
                            .bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this
                        .handleSubmit
                        .bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}