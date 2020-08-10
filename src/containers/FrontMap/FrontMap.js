import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { fromLonLat, toLonLat } from 'ol/proj';
import { withRouter } from 'react-router';
import olms from 'ol-mapbox-style';
import classes from './FrontMap.module.css';

const FrontMap = (props) => {
  const mapRef = useRef(null);
  const { history } = props;

  useEffect(() => {
    const polandLonLat = [19.408318, 52.121216];
    const polandWebMercator = fromLonLat(polandLonLat);

    const styleJson =
      'https://api.maptiler.com/maps/76c95155-3672-495b-a1b0-e2cf76a359d6/style.json?key=GflTzOMvFDCYQ9RjOmMu';
    const olMap = new Map({
      target: mapRef.current,
      view: new View({
        constrainResolution: true,
        center: polandWebMercator,
        zoom: 6,
      }),
    });

    olms(olMap, styleJson);

    olMap.on('click', (evt) => {
      console.info(evt.pixel);
      // console.info(ol.proj.toLonLat(evt.coordinate));
      const coords = toLonLat(evt.coordinate);

      const [lon, lat] = coords;
      const queryString = `lat=${lat}&lng=${lon}`;

      window.setTimeout(() => {
        history.push({
          pathname: '/location',
          search: `?${queryString}`,
        });
      }, 400);
    });
  }, [history]);

  return (
    <>
      <div id="map" className={classes.FrontMap} ref={mapRef}>
        {' '}
      </div>
    </>
  );
};

FrontMap.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(FrontMap);
