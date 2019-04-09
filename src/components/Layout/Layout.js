import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiteDrawer from '../Navigation/SiteDrawer/SiteDrawer';

class Layout extends Component {

    state = {
        openedSiteDrawer: false
    };

    closeSiteDrawerHandler = () => {
        this.setState ({openedSiteDrawer: false});
    }

    openSiteDrawerHandler = () => {
        this.setState ({openedSiteDrawer: true});
    }


    render() {

        return (
            <ReactAux>
                <SiteDrawer open={this.state.openedSiteDrawer} closed={this.closeSiteDrawerHandler}/>
                <Toolbar open={this.openSiteDrawerHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </ReactAux>
        )
    }

};

export default Layout;