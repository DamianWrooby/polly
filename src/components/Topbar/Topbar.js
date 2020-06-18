import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

import classes from './Topbar.module.css';


const Topbar = () => {
    return (
        <header className={classes.Topbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Topbar;