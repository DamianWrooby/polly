import React from 'react';
import Topbar from '../../components/Topbar/Topbar.js';
import classes from './Layout.module.css';


const layout = ({ children }) => {
    return (
        <div className={classes.Wrapper}>
            <main className={classes.Main}>
                <Topbar />
                <div className={classes.Content}>
                    {children}
                </div>
            </main>
        </div>
    );
}

export default layout;