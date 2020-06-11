import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

import classes from './Topbar.module.css';


const Topbar = () => {
    return (
        <div className={classes.Topbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default Topbar;