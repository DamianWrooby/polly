import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Search</NavigationItem>
            <NavigationItem link="/about">About</NavigationItem>
        </ul>
    );
};

export default NavigationItems;