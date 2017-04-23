import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class CommentInput extends Component {

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func,
    };

    static defaultProps = {
        username: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ''
        };
    }


}