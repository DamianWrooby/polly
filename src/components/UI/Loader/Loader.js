import React from 'react';
import classes from './Loader.module.css';

const spinner = () => {
  return (
    <div className={classes.Loader}>
      <div className={[classes.Circle, classes.One].join(' ')}></div>
      <div className={[classes.Circle, classes.Two].join(' ')}></div>
      <div className={[classes.Circle, classes.Three].join(' ')}></div>
    </div>
  );
};

export default spinner;
