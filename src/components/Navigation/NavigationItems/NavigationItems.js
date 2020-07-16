import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Button from '../../UI/Button/Button';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        <Button icon="fa fa-search" />
      </NavigationItem>
      <NavigationItem link="/about">
        <Button icon="fa fa-info" />
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
