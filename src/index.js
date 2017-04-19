const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red'
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
};

function renderApp(newAppState, oldAppState = {}) {
    if (newAppState === oldAppState) {
        return;
    }
    console.log('render app...');
    renderTitle(newAppState.title);
    renderContent(newAppState.content);
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

function renderContent(newContent, oldContent) {
    if (newContent === oldContent) {
        return;
    }
    console.log('render content...');
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = newContent.text;
    contentDOM.style.color = newContent.color;
}

function dispatch(action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break;
    }
}

function createStore(state, stateChanger) {
    // 监听函数们
    const listeners = [];

    // 订阅
    const subscribe = (listener) => {
        listeners.push(listener);
    };

    const getState = () => state;

    const dispatch = (action) => {
        stateChanger(state, action);
        listeners.forEach((listener) => {
            listener();
        });
    };

    return {
        getState,
        dispatch,
        subscribe
    }
}

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color;
            break;
        default:
            break;
    }
}

const store = createStore(appState, stateChanger);
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