import React from 'react';
import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Heading}>404</div>
      <div className={classes.Subheading}>Page not found</div>
    </div>
  );
};

export default NotFound;
