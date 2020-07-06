import React from 'react';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import classes from './Topbar.module.css';


const Topbar = () => {
    return (
        <header className={classes.Topbar}>
            <div className={classes.Watermark}>Polly</div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Topbar;