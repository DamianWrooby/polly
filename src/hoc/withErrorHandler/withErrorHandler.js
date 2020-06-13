import React, { Component } from 'react';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                console.log(error);
                this.setState({ error: error });
            });
        }

        render() {
            let renderSection = this.state.error ? <WrappedComponent {...this.props} /> : <WrappedComponent {...this.props} />;
            return renderSection;
        }
    };
};

export default withErrorHandler;
