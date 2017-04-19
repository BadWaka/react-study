function createStore(reducer) {

    let state = null;
    const listeners = [];    // 监听函数们

    /**
     * 获得状态
     */
    const getState = () => state;

    /**
     * 订阅
     * @param listener
     */
    const subscribe = (listener) => {
        listeners.push(listener);
    };

    /**
     * 发送action
     * @param action
     */
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    dispatch({});   // 初始化state

    return {
        getState,
        dispatch,
        subscribe
    }
}

function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) {
        return;
    }
    console.log('render app...');
    renderTitle(newAppState.title, oldAppState.title);
    renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) {
        return;
    }
    console.log('render title...');
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = newTitle.text;
    titleDOM.style.color = newTitle.color;
}

function renderContent(newContent, oldContent = {}) {
    // console.log('newContent', newContent, 'oldContent', oldContent);
    if (newContent === oldContent) {
        return;
    }
    console.log('render content...');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red'
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
};

function reducer(state, action) {
    if (!state) {
        return {
            title: {
                text: 'React.js 小书',
                color: 'red'
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        };
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {    // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            };
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            };
        default:
            return state;
    }
}

const store = createStore(appState, reducer);
let oldState = store.getState();    // 旧state
store.subscribe(() => {
    const newState = store.getState();  // 数据可能变化，获取新的 state
    renderApp(newState, oldState);  // 把新旧的 state 传进去渲染
    oldState = newState;    // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
});

// 首次渲染
renderApp(store.getState());

store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: '《React.js 小书》'
});

store.dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'yellow'
});

// renderApp(store.getState());