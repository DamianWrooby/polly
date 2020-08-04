import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../../components/UI/Input/Input';
import Loader from '../../components/UI/Loader/Loader';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Button from '../../components/UI/Button/Button';
import classes from './Front.module.css';
import axios from '../../axios-geocode';

function Front(props) {
  const [query, setQuery] = useState('');
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkValidity = (value) => value.trim() !== '';

  const inputChangedHandler = (event) => {
    const updatedInputValue = event.target.value;
    const updatedValidation = checkValidity(updatedInputValue);
    setQuery(updatedInputValue);
    setValid(updatedValidation);
  };

  const searchHandler = (event) => {
    event.preventDefault();
    const { history } = props;
    if (!query) {
      setValid(false);
    } else {
      setLoading(true);
      const key = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

      axios
        .get(`address?key=${key}&location=${query}`)
        .then((response) => {
          const loc = response.data.results[0].locations[0].latLng;
          setLoading(false);
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
          setLoading(false);
          setError(true);
        });
    }
  };
  let form = (
    <form
      className={[
        'animate__animated',
        'animate__bounceInDown',
        'animate__fast',
      ].join(' ')}
      onSubmit={searchHandler}
    >
      <Input
        value={query}
        changed={inputChangedHandler}
        blured={inputChangedHandler}
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

Front.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withErrorHandler(Front, axios);
