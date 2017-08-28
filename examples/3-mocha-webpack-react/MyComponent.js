import React, {Component} from 'react';

export default class MyComponent extends Component {
    defaultProps = {
        name: 'old world'
    }

    render() {
        return <div>
            <div className="wrapper">
                <h1>Hello, {this.props.name}</h1>
            </div>
        </div>
    }
}