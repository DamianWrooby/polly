import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classes from './NavigationItem.module.css';

const navigationItem = ({ link, exact, children }) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={link} activeClassName={classes.active} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};
navigationItem.defaultProps = {
  children: null,
  exact: false,
};
navigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  children: PropTypes.node,
};
export default navigationItem;
