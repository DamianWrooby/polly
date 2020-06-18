import React, { Component } from 'react';
import classes from './Results.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import MeasurementInfo from '../../components/MeasurementInfo/MeasurementInfo';
import MeasurementBox from '../../components/MeasurementBox/MeasurementBox';
import axios from 'axios';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                coordinates: {},
                info: {

                }
            },
            data: {},
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const updatedLocation = { ...this.state.location };
        const updatedCoordinates = { ...updatedLocation.coordinates };
        for (let param of query.entries()) {
            updatedCoordinates[param[0]] = param[1];
        }
        updatedLocation.coordinates = updatedCoordinates;
        this.setState({ location: updatedLocation });

        const airlyKey = 'E5uVHwAJDcdy1YKj9x05zTgKtaxMKgAk';
        const airlyDistance = '100';
        const geocodingKey = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

        const locationInfoReq = axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${geocodingKey}&location=${updatedLocation.coordinates.lat},${updatedLocation.coordinates.lng}`);
        const pollutionInfoReq = axios.get(`https://airapi.airly.eu/v2/measurements/nearest?lat=${updatedLocation.coordinates.lat}&lng=${updatedLocation.coordinates.lng}&maxDistanceKM=${airlyDistance}&apikey=${airlyKey}`);

        axios
            .all([locationInfoReq, pollutionInfoReq])
            .then(axios.spread((...responses) => {
                const locationInfoRes = responses[0];
                const pollutionInfoRes = responses[1];

                let updatedLocationInfo = { ...updatedLocation.info };
                updatedLocationInfo = locationInfoRes.data.results[0].locations[0]
                updatedLocation.info = updatedLocationInfo;

                let updatedData = { ...this.state.data };
                updatedData = pollutionInfoRes.data;

                this.setState({ loading: false, location: updatedLocation, data: updatedData }, () => {
                    console.log(this.state.data);
                });
            })).catch(errors => {
                this.setState({ loading: false, error: true });
                console.log(errors);
            });
    }

    goBackHandler = (event) => {
        event.preventDefault();
        this.props.history.goBack();
    }

    render() {
        let results = (
            <div className={classes.Content}>
                <MeasurementInfo location={this.state.location.info} currentData={this.state.data.current} />
                <section className={classes.Measurments}>
                    <MeasurementBox />
                </section>
            </div>
        );

        if (this.state.loading) {
            results = <Spinner />;
        } else if (this.state.error) {
            results = (
                <React.Fragment>
                    <p>Cannot find this location. Try another one.</p>
                    <button onClick={this.goBackHandler}>Go back</button>
                </React.Fragment>
            );
        }

        return (
            <div className={classes.Results}>
                {results}
            </div>
        );
    }
}

export default withErrorHandler(Results, axios);