import React, { Component } from 'react';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };
        constructor(props) {
            super(props);
            this.reqInterceptor = axios.interceptors.request.use((req) => {
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(
                (res) => res,
                (error) => {
                    this.setState({ error: error });
                }
            );
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        render() {
            let renderSection = this.state.error ? <div>Ups. Something went wrong.</div> : <WrappedComponent {...this.props} />;
            return renderSection;
        }
    };
};

export default withErrorHandler;
