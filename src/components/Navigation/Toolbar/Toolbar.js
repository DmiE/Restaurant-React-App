import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SiteDrawerButton from '../SiteDrawer/SiteDrawerButton/SiteDrawerButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SiteDrawerButton clicked={props.open} />
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;