import React from 'react'
import ReactAux from '../../hoc/ReactAux'
import classes from './Layout.css'

const layout = (props) => (
    <ReactAux>
        <div>
            Toolbar, SideDrawer, Backdrop
    </div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </ReactAux>
);

export default layout;