/**
 * Created by waka on 2017/4/10.
 */
import React, {Component} from 'react';

export default class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}