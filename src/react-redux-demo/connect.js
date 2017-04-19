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
        constructor() {
            super();
            this.state = {
                allProps: {}
            };
        }

        componentWillMount() {
            const {store} = this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }

        _updateProps() {
            const {store} = this.context;phantomjs
            let stateProps = mapStateToProps(store.getState(), this.props);
            this.setState({
                allProps: {
                    ...stateProps,
                    ...this.props
                }
            });
        }

        render() {
            return <WrappedComponent {...this.state.allProps}/>;
        }
    }

    return Connect;
};