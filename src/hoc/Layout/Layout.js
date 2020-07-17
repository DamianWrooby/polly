import React from 'react';
import Topbar from '../../components/Topbar/Topbar.js';
import classes from './Layout.module.css';

const layout = ({ children }) => {
  return (
    <div className={classes.Wrapper}>
      <main className={classes.Main}>
        <Topbar />
        <div className={classes.Curved}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="rgb(246, 251, 253)"
              fillOpacity="1"
              d="M0,128L60,154.7C120,181,240,235,360,240C480,245,600,203,720,186.7C840,171,960,181,1080,202.7C1200,224,1320,256,1380,272L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className={classes.Content}>{children}</div>
      </main>
    </div>
  );
};

export default layout;
