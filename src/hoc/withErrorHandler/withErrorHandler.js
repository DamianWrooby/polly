/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error }, () => {
            const { error: err } = this.state;
            console.log(err);
          });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      const { error: err } = this.state;

      const renderSection = err ? (
        <>
          <ErrorMessage
            textElement={
              <p>
                {this.state.error.message}
                <br />
                Try to search another location.
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
