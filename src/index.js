import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/CommentApp';
import './index.css';

import wrapWithLoadData from './higherOrderComponents/wrapWithLoadData';

class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data}/>;
    }
}

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username');
export default InputWithUserName;

ReactDOM.render(
    <CommentApp />,
    document.getElementById('root')
);
