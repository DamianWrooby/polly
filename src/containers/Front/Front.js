import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import classes from './Front.module.css';

class Front extends Component {
    state = {
        query: ''
    };

    inputChangedHandler = (event) => {
        this.setState({ query: event.target.value });
    }

    render() {
        return (
            <div className={classes.Front}>
                <form onSubmit={this.searchHandler}>
                    <Input
                        value={this.state.query}
                        changed={this.inputChangedHandler}
                        label='Search location'
                    />
                    <button>
                        Search
				    </button>
                </form>

            </div>
        );
    }
}

export default Front;