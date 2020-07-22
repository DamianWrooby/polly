import React, { Component } from 'react';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error }, () => {
            console.log(this.state.error);
          });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      let renderSection = this.state.error ? (
        <>
          <ErrorMessage
            textElement={
              <p>
                {this.state.error.message}. <br />
                Try to search another loaction.
              </p>
            }
          />
        </>
      ) : null;
      return (
        <>
          {renderSection}
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
