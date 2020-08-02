import React from 'react';
import classes from './Loader.module.css';

const spinner = () => {
  return (
    <div className={classes.Loader}>
      <div className={[classes.Circle, classes.One].join(' ')} />
      <div className={[classes.Circle, classes.Two].join(' ')} />
      <div className={[classes.Circle, classes.Three].join(' ')} />
    </div>
  );
};

export default spinner;
