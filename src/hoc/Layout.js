import React, { Component } from 'react';
import Topbar from '../components/Topbar/Topbar.js';
import classes from './Layout.module.css';


const layout = ({ children }) => {
    return (
        <React.Fragment className={classes.Layout}>
            <Topbar />
            <div className={classes.Main}>{children}</div>
        </React.Fragment>
    );
}

export default layout;