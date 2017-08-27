import React, {Component} from 'react';

export default class MyComponent extends Component {
    defaultProps = {
        name: 'old world'
    }

    render() {
        return <div>
            <h1>Hello, {this.props.name}</h1>
        </div>
    }
}