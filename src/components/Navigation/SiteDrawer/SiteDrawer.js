import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SiteDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux';


const siteDrawer = (props) => {
    
    let attachedClasses = [classes.SiteDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SiteDrawer, classes.Open];
    }


    return (
        <ReactAux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </ReactAux>
    )
}

export default siteDrawer;