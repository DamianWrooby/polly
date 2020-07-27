import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Button from '../../UI/Button/Button';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/polly" exact>
        <Button icon="fa fa-search" type="button" ariaLabel="search" />
      </NavigationItem>
      <NavigationItem link="/about">
        <Button icon="fa fa-info" type="button" ariaLabel="about" />
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
