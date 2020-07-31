import PropTypes from 'prop-types';
import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import WeatherCircle from '../WeatherCircle/WeatherCircle';

import classes from './MeasurementBox.module.css';

const MeasurementBox = ({ type, label, data, tip }) => {
  const dataArr = [];
  let box;

  switch (type) {
    case 'pollution': {
      Object.keys(data).forEach((key) => {
        if (data[key].value !== null) {
          dataArr.push({
            label: key,
            value: data[key].value,
            maxValue: data[key].maxValue,
          });
        }
      });

      const pollutionBoxClassList = [
        classes.MeasurementBox,
        'animate__animated',
        'animate__bounceInUp',
      ];
      const circlesClassList = [classes.Circles, classes.Pollution];
      if (dataArr.length > 3) {
        circlesClassList.push(classes.Wrap);
      }

      box =
        dataArr.length !== 0 ? (
          <div className={pollutionBoxClassList.join(' ')}>
            <h2 className={classes.Label}>{label}</h2>
            <p className={classes.Tip}>{tip}</p>
            <div className={circlesClassList.join(' ')}>
              {dataArr.map((el) => {
                return (
                  <MeasurementCircle
                    key={el.label}
                    label={el.label}
                    value={el.value}
                    maxValue={el.maxValue}
                  />
                );
              })}
            </div>
          </div>
        ) : null;
      break;
    }
    case 'weather':
      Object.keys(data).forEach((key) => {
        if (data[key].value !== null) {
          dataArr.push({ label: key, value: data[key].value });
        }
      });
      box =
        dataArr.length !== 0 ? (
          <div className={classes.MeasurementBox}>
            <div className={classes.Label}>{label}</div>
            <div className={classes.Circles}>
              {dataArr.map((el) => {
                return (
                  <WeatherCircle
                    key={el.label}
                    label={el.label}
                    value={el.value}
                  />
                );
              })}
            </div>
          </div>
        ) : null;
      break;
    default:
      box = <p>No measurement content</p>;
  }

  return <>{box}</>;
};
MeasurementCircle.defaultProps = {
  data: null,
  tip: '',
};
MeasurementBox.propTypes = {
  data: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  tip: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default MeasurementBox;
