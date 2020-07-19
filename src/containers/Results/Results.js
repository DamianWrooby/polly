import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import classes from './Results.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import MeasurementInfo from '../../components/MeasurementInfo/MeasurementInfo';
import MeasurementBox from '../../components/MeasurementBox/MeasurementBox';
import AirQualityBox from '../../components/AirQualityBox/AirQualityBox';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        coordinates: {},
        info: {},
      },
      time: {
        from: '',
        till: '',
      },
      index: {},
      measurements: {},
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const query = new URLSearchParams(this.props.location.search);
    const updatedLocation = {
      coordinates: {},
      info: {},
    };
    const updatedCoordinates = { ...updatedLocation.coordinates };
    // eslint-disable-next-line no-restricted-syntax
    for (const param of query.entries()) {
      // updatedCoordinates[param[0]] = param[1];
      [, updatedCoordinates[param[0]]] = param;
    }
    updatedLocation.coordinates = updatedCoordinates;
    this.setState({ location: updatedLocation });

    const airlyKey = 'E5uVHwAJDcdy1YKj9x05zTgKtaxMKgAk';
    const airlyDistance = '1000';
    const geocodingKey = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

    const locationInfoReq = axios.get(
      `http://www.mapquestapi.com/geocoding/v1/reverse?key=${geocodingKey}&location=${updatedLocation.coordinates.lat},${updatedLocation.coordinates.lng}`
    );
    const pollutionInfoReq = axios.get(
      `https://airapi.airly.eu/v2/measurements/nearest?lat=${updatedLocation.coordinates.lat}&lng=${updatedLocation.coordinates.lng}&maxDistanceKM=${airlyDistance}&apikey=${airlyKey}`
    );

    axios
      .all([locationInfoReq, pollutionInfoReq])
      .then(
        axios.spread((...responses) => {
          const locationInfoRes = responses[0];
          const pollutionInfoRes = responses[1];
          console.log(pollutionInfoRes.data);

          let updatedLocationInfo = { ...updatedLocation.info };
          // updatedLocationInfo = locationInfoRes.data.results[0].locations[0];
          [updatedLocationInfo] = locationInfoRes.data.results[0].locations;
          updatedLocation.info = updatedLocationInfo;

          // let updatedIndex = { ...this.state.index };
          const updatedIndex = pollutionInfoRes.data.current.indexes[0];

          const updatedTime = {
            from: '',
            till: '',
          };
          updatedTime.from = pollutionInfoRes.data.current.fromDateTime;
          updatedTime.till = pollutionInfoRes.data.current.tillDateTime;

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
          console.log(updatedMeasurementsArr);

          updatedMeasurements = {
            dust: updatedDust,
            gases: updatedGases,
            weather: updatedWeather,
          };
          console.log(updatedMeasurements);

          this.setState(
            {
              loading: false,
              location: updatedLocation,
              time: updatedTime,
              index: updatedIndex,
              measurements: updatedMeasurements,
            },
            () => {
              console.log(this.state);
            }
          );
        })
      )
      .catch((errors) => {
        this.setState({ loading: false, error: true });
        console.log(errors);
      });
  }

  goBackHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.history.goBack();
  };

  render() {
    const {
      location: { info },
    } = this.state;
    const { time } = this.state;
    const { index } = this.state;
    const {
      measurements: { dust },
    } = this.state;
    const {
      measurements: { gases },
    } = this.state;
    const {
      measurements: { weather },
    } = this.state;
    const { loading } = this.state;
    const { error } = this.state;
    console.log(this.props);

    let results = (
      <div className={classes.Content}>
        <MeasurementInfo location={info} time={time} />
        <AirQualityBox index={index} />
        <div className={classes.Measurements}>
          <MeasurementBox type="pollution" label="Dust" data={dust} />
          <MeasurementBox type="pollution" label="Gases" data={gases} />
          <MeasurementBox type="weather" label="Weather" data={weather} />
        </div>
      </div>
    );

    if (loading) {
      results = <Spinner />;
    } else if (error) {
      results = (
        <>
          <p>Cannot find this location. Try another one.</p>
          <button type="button" onClick={this.goBackHandler}>
            Go back
          </button>
        </>
      );
    }

    return <div className={classes.Results}>{results}</div>;
  }
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
