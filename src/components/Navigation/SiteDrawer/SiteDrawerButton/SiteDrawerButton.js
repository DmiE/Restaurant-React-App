import React from 'react';

import classes from './SiteDrawerButton.css'


const siteDrawerButton = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default siteDrawerButton;