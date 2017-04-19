/**
 * Created by BadWaka on 2017/4/19.
 */
import React, {Component, PropTypes} from 'react'
import ThemeSwitch from './ThemeSwitch'
import {connect} from './react-redux';

class Content extends Component {

    static propTypes = {
        themeColor: PropTypes.string,
    };

    render() {
        console.log('【Content】themeColor', this.props.themeColor);
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
};
Content = connect(mapStateToProps)(Content);

export default Content