import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux';
import Header from './react-redux-demo/Header'
import Content from './react-redux-demo/Content'
import './index.css'
// import {Provider} from './react-redux-demo/react-redux';
import {Provider} from 'react-redux';

// function createStore(reducer) {
//     let state = null;
//     const listeners = [];
//     const subscribe = (listener) => listeners.push(listener);
//     const getState = () => state;
//     const dispatch = (action) => {
//         state = reducer(state, action);
//         listeners.forEach((listener) => listener());
//     };
//     dispatch({}); // 初始化 state
//     return {getState, dispatch, subscribe};
// }

const themeReducer = (state, action) => {
    if (!state) {
        return {
            themeColor: 'red'
        };
    }
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            };
        default:
            return state;
    }
};

const store = createStore(themeReducer);

class Index extends Component {

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
);