import React from 'react';

import classes from './About.module.css';

const About = () => {
  const classList = [
    classes.About,
    'animate__animated',
    'animate__bounceInDown',
    'animate__fast',
  ];
  return (
    <div className={classList.join(' ')}>
      <h1>Polly</h1>
      <h2>Check air pollution in your area</h2>
      <p>
        Polly is a web application that allows users to check air quality in
        their area. Air pollution is now considered to be the world's largest
        environmental health threat, accounting for 7 million deaths around the
        world every year. Air pollution causes and exacerbates a number of
        diseases, ranging from asthma to cancer, pulmonary illnesses and heart
        disease. Especially in Poland, country were I come from, air pollution
        is a big issue - we are one of the most polluted country in Europe
        because of energy managment based on fossil fuels.
      </p>
      <div className={classes.Credits}>
        <p>
          Created by{' '}
          <span>
            <a href="https://twitter.com/DamianWrooby">Wrooby</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
