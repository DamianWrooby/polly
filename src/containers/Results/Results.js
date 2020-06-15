import React, { Component } from 'react';
import classes from './Results.module.css';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import LocationInfo from '../../components/LocationInfo/LocationInfo';
import axios from 'axios';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
            },
            loading: true,
            error: false
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        let updatedLocation = {};
        console.log(query);
        for (let param of query.entries()) {
            updatedLocation[param[0]] = param[1];
        }
        this.setState({ location: updatedLocation });

        const airlyKey = 'E5uVHwAJDcdy1YKj9x05zTgKtaxMKgAk';
        const airlyDistance = '100';
        const geocodingKey = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

        /*
        axios
            .get(`nearest?lat=${updatedLocation.lat}&lng=${updatedLocation.lng}&maxDistanceKM=${airlyDistance}&apikey=${airlyKey}`)
            .then((response) => {
                this.setState({ loading: false });
                console.log(response.data);
            })
            .catch((err) => {
                this.setState({ loading: false, error: true });
                console.log(err);
            });
        */

        const locationInfoReq = axios.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${geocodingKey}&location=${updatedLocation.lat},${updatedLocation.lng}`);
        const pollutionInfoReq = axios.get(`https://airapi.airly.eu/v2/measurements/nearest?lat=${updatedLocation.lat}&lng=${updatedLocation.lng}&maxDistanceKM=${airlyDistance}&apikey=${airlyKey}`);

        axios
            .all([locationInfoReq, pollutionInfoReq])
            .then(axios.spread((...responses) => {
                const locationInfoRes = responses[0];
                const pollutionInfoRes = responses[1];
                this.setState({ loading: false });
                console.log(locationInfoRes.data.results[0].locations[0], pollutionInfoRes.data);
            })).catch(errors => {
                this.setState({ loading: false, error: true });
                console.log(errors);
            });
    }

    render() {
        let results = (<div className={classes.Content}>
            <LocationInfo />
        </div>
        );

        if (this.state.loading) {
            results = <Spinner />;
        } else if (this.state.error) {
            results = <p>Ups. Something went wrong with results loading.</p>
        }

        return (
            <div className={classes.Results}>
                {results}
            </div>
        );
    }
}

export default withErrorHandler(Results, axios);