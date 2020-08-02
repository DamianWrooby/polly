import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Loader from '../../components/UI/Loader/Loader';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Button from '../../components/UI/Button/Button';
import classes from './Front.module.css';
import axios from '../../axios-geocode';

class Front extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      valid: true,
      // location: {
      //   lat: null,
      //   lng: null,
      // },
      loading: false,
      error: null,
    };
  }

  inputChangedHandler = (event) => {
    const updatedInputValue = event.target.value;
    const updatedValidation = this.checkValidity(updatedInputValue);
    this.setState({ query: updatedInputValue, valid: updatedValidation });
  };

  checkValidity = (value) => value.trim() !== '';

  searchHandler = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { query } = this.state;
    if (!query) {
      this.setState({ valid: false });
    } else {
      this.setState({ loading: true });
      const key = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

      axios
        .get(`address?key=${key}&location=${query}`)
        .then((response) => {
          const loc = response.data.results[0].locations[0].latLng;
          this.setState({ loading: false });
          const queryParams = [];
          // for (let i in this.state.location) {
          //   queryParams.push(
          //     encodeURIComponent(i) + '=' + this.state.location[i]
          //   );
          // }
          Object.keys(loc).forEach((i) => {
            queryParams.push(`${encodeURIComponent(i)}=${loc[i]}`);
          });
          const queryString = queryParams.join('&');
          history.push({
            pathname: '/location',
            search: `?${queryString}`,
          });
        })
        .catch(() => {
          this.setState({ loading: false, error: true });
        });
    }
  };

  render() {
    const { query, valid, error, loading } = this.state;
    let form = (
      <form
        className={[
          'animate__animated',
          'animate__bounceInDown',
          'animate__fast',
        ].join(' ')}
        onSubmit={this.searchHandler}
      >
        <Input
          value={query}
          changed={this.inputChangedHandler}
          blured={this.inputChangedHandler}
          label="Type your location "
          sublabel="e.g. Mariacka, Gdańsk, Poland"
          invalid={!valid}
          validationFeedback="This field cannot be empty"
          fieldId="search"
        />
        <Button
          disabled={!valid}
          icon="fa fa-search"
          type="submit"
          ariaLabel="search"
        />
      </form>
    );

    if (loading) {
      form = <Loader />;
    } else if (error) {
      form = null;
    }
    return <div className={classes.Front}>{form}</div>;
  }
}

Front.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withErrorHandler(Front, axios);
