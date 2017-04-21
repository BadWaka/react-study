/**
 * Created by BadWaka on 2017/4/19.
 */
import React, {Component, PropTypes} from 'react';

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {

        static contextTypes = {
            store: PropTypes.object,
        };

        // TODO: 如何从store获取数据

        render() {
            const {store} = this.context;
            let stateProps = mapStateToProps(store.getState());
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...stateProps}/>;
        }
    }

    return Connect;
};