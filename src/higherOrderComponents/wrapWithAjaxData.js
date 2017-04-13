/**
 * Created by BadWaka on 12/04/2017.
 */
import React, {Component} from 'react';

export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super();
            this.state = {
                data: null
            }
        }

        componentWillMount() {

        }
    }
}