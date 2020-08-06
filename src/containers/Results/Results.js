import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Results.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Loader from '../../components/UI/Loader/Loader';
import MeasurementInfo from '../../components/MeasurementInfo/MeasurementInfo';
import MeasurementBox from '../../components/MeasurementBox/MeasurementBox';
import AirQualityBox from '../../components/AirQualityBox/AirQualityBox';
import ErrorMessage from '../../components/UI/ErrorMessage/ErrorMessage';

function Results(props) {
  const [coordinates, setCoordinates] = useState({});
  const [info, setInfo] = useState({});
  const [from, setFrom] = useState('');
  const [till, setTill] = useState('');
  const [index, setIndex] = useState({});
  const [dust, setDust] = useState({});
  const [gases, setGases] = useState({});
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    const query = new URLSearchParams(props.location.search);
    const updatedLocation = {
      coordinates: {},
      info: {},
    };
    const updatedCoordinates = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const param of query.entries()) {
      // updatedCoordinates[param[0]] = param[1];
      [, updatedCoordinates[param[0]]] = param;
    }
    updatedLocation.coordinates = updatedCoordinates;
    console.log(updatedCoordinates);
    setCoordinates(updatedCoordinates);

    const airlyKey = 'E5uVHwAJDcdy1YKj9x05zTgKtaxMKgAk';
    const airlyDistance = '1000';
    const geocodingKey = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

    const locationInfoReq = axios.get(
      `https://www.mapquestapi.com/geocoding/v1/reverse?key=${geocodingKey}&location=${updatedCoordinates.lat},${updatedCoordinates.lng}`
    );
    const pollutionInfoReq = axios.get(
      `https://airapi.airly.eu/v2/measurements/nearest?lat=${updatedCoordinates.lat}&lng=${updatedCoordinates.lng}&maxDistanceKM=${airlyDistance}&apikey=${airlyKey}`
    );

    axios
      .all([locationInfoReq, pollutionInfoReq])
      .then(
        axios.spread((...responses) => {
          const locationInfoRes = responses[0];
          const pollutionInfoRes = responses[1];

          let updatedLocationInfo = {};
          // updatedLocationInfo = locationInfoRes.data.results[0].locations[0];
          updatedLocationInfo = locationInfoRes.data.results[0].locations;
          setInfo(updatedLocationInfo[0]);

          // let updatedIndex = { ...this.state.index };
          const updatedIndex = pollutionInfoRes.data.current.indexes[0];
          setIndex(updatedIndex);

          const updatedTime = {
            from: '',
            till: '',
          };
          updatedTime.from = pollutionInfoRes.data.current.fromDateTime;
          updatedTime.till = pollutionInfoRes.data.current.tillDateTime;

          setFrom(updatedTime.from);
          setTill(updatedTime.till);

          const valuesArray = pollutionInfoRes.data.current.values;
          const pollutionObject = {};
          for (let i = 0; i < valuesArray.length; i += 1) {
            pollutionObject[valuesArray[i].name] = valuesArray[i].value;
          }

          let updatedMeasurements = {
            dust: {
              PM1: {
                value: null,
                maxValue: null,
              },
              PM25: {
                value: null,
                maxValue: 25,
              },
              PM10: {
                value: null,
                maxValue: 50,
              },
            },
            gases: {
              NO2: {
                value: null,
                maxValue: 200,
              },
              SO2: {
                value: null,
                maxValue: 350,
              },
              CO: {
                value: null,
                maxValue: 30000,
              },
              O3: {
                value: null,
                maxValue: 100,
              },
            },
            weather: {
              TEMPERATURE: {
                value: null,
              },
              HUMIDITY: {
                value: null,
              },
              PRESSURE: {
                value: null,
              },
            },
          };
          const updatedDust = { ...updatedMeasurements.dust };
          const updatedGases = { ...updatedMeasurements.gases };
          const updatedWeather = { ...updatedMeasurements.weather };

          const updatedMeasurementsArr = [
            updatedDust,
            updatedGases,
            updatedWeather,
          ];

          updatedMeasurementsArr.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
              Object.keys(pollutionObject).forEach((property) => {
                if (key === property) {
                  // eslint-disable-next-line no-param-reassign
                  obj[key].value = pollutionObject[property];
                }
              });
            });
          });

          updatedMeasurements = {
            dust: updatedDust,
            gases: updatedGases,
            weather: updatedWeather,
          };
          console.log(updatedDust);
          console.log(updatedMeasurements);
          setLoading(false);
          setDust({ ...updatedMeasurements.dust });
          setGases({ ...updatedMeasurements.gases });
          setWeather({ ...updatedMeasurements.weather });
        })
      )
      .catch((errors) => {
        setLoading(false);
        setError(true);
        console.log(errors);
      });
  }, []);

  const goBackHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    props.history.goBack();
  };

  let results = (
    <div className={classes.Content}>
      <MeasurementInfo location={info} till={till} from={from} />
      <AirQualityBox index={index} />
      <div
        className={[
          classes.Measurements,
          'animate__animated',
          'animate__bounceInUp',
        ].join(' ')}
      >
        <MeasurementBox
          type="pollution"
          label="Dust"
          data={dust}
          tip="Tap for more information"
        />
        <MeasurementBox
          type="pollution"
          label="Gases"
          data={gases}
          tip="Tap for more information"
        />
        <MeasurementBox type="weather" label="Weather" data={weather} />
      </div>
    </div>
  );

  if (loading) {
    results = <Loader />;
  } else if (error) {
    results = (
      <ErrorMessage
        textElement={
          <p>
            Cannot find this location.
            <br />
            Try another one.
          </p>
        }
        action={goBackHandler}
      />
    );
  }

  return <div className={classes.Results}>{results}</div>;
}

Results.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default withErrorHandler(Results, axios);
