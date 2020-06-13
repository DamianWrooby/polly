import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Front.module.css';
import axios from '../../axios-geocode';


class Front extends Component {
    state = {
        query: '',
        location: {
            lat: null,
            lng: null
        },
        loading: false,
        error: null
    };

    inputChangedHandler = (event) => {
        this.setState({ query: event.target.value });
    }

    searchHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const key = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

        axios
            .get(`address?key=${key}&location=${this.state.query}`)
            .then((response) => {
                const location = response.data.results[0].locations[0].latLng;
                this.setState({ loading: false, location: location });
                console.log(this.state.location);
            })
            .catch((err) => {
                this.setState({ loading: false, error: true });
            });

    }

    render() {
        let form = (<form onSubmit={this.searchHandler}>
            <Input
                value={this.state.query}
                changed={this.inputChangedHandler}
                label='Search location'
            />
            <button>
                Search
            </button>
        </form>);

        if (this.state.loading) {
            form = <Spinner />;
        } else if (this.state.error) {
            form = <div className={classes.Error}>{this.state.error}</div>
        }
        return (
            <div className={classes.Front}>
                {form}
            </div>
        );
    }
}

export default withErrorHandler(Front, axios);