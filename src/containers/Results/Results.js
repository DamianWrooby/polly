import React, { Component } from 'react';
import classes from './Results.module.css';
import axios from '../../axios-pollution';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
            },
            loading: false,
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
        console.log(updatedLocation);
        this.setState({ location: updatedLocation }, () => {
            console.log(this.state.location);
        });

        const key = 'E5uVHwAJDcdy1YKj9x05zTgKtaxMKgAk';
        const distance = '10';

        axios
            .get(`nearest?lat=${updatedLocation.lat}&lng=${updatedLocation.lng}&maxDistanceKM=${distance}&apikey=${key}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                this.setState({ loading: false, error: true });
                console.log(err);
            });
    }

    render() {
        return (
            <div className={classes.Results}>
                Results
            </div>
        );
    }
}

export default Results;