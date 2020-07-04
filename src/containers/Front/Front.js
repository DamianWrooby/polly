import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import classes from './Front.module.css';
import axios from '../../axios-geocode';


class Front extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            valid: true,
            location: {
                lat: null,
                lng: null
            },
            loading: false,
            error: null
        };
    }

    inputChangedHandler = (event) => {
        const updatedInputValue = event.target.value;
        const updatedValidation = this.checkValidity(updatedInputValue);
        this.setState({ query: updatedInputValue, valid: updatedValidation });
    }

    checkValidity = (value) => {
        console.log(value.trim(), value.trim() !== '');
        return value.trim() !== '';
    };

    searchHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const key = 'xyDRoBak7eftOCqBEbiRd30Qm0u9K2Nr';

        axios
            .get(`address?key=${key}&location=${this.state.query}`)
            .then((response) => {
                const location = response.data.results[0].locations[0].latLng;
                this.setState({ loading: false, location: location });
                const queryParams = [];
                for (let i in this.state.location) {
                    queryParams.push(encodeURIComponent(i) + '=' + this.state.location[i]);
                }
                let queryString = queryParams.join('&');
                this.props.history.push({
                    pathname: '/location',
                    search: '?' + queryString
                });
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
                blured={this.inputChangedHandler}
                label='Type location e.g. Bydgoszcz, Poland'
                invalid={!this.state.valid}
                validationFeedback='This field cannot be empty'
            />
            <button disabled={!this.state.valid} type="submit">
                Search
            </button>
        </form>);

        if (this.state.loading) {
            form = <Spinner />;
        } else if (this.state.error) {
            form = <p>Ups. Something went wrong.</p>
        }
        return (
            <div className={classes.Front}>
                {form}
            </div>
        );
    }
}

export default withErrorHandler(Front, axios);