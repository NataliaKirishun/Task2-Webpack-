import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(){
        super();
        this.state = {
            hasError: false,
        }

    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error, info });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;