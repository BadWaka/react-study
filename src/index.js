import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/CommentApp';
import './index.css';

import wrapWithLoadData from './wrapWithLoadData';

class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data}/>;
    }
}

ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
);
