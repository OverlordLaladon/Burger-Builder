import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.module.css';

const logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="MyBurger" />
        {/* this is going to be a string showing the location where webpack stored the image  */}
    </div>
);

export default logo;