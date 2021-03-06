import React from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.labelName}</div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabledLess}>-</button>
        <button className={classes.More} onClick={props.added} disabled={props.disabledMore}>+</button>
    </div>
)

export default buildControl;