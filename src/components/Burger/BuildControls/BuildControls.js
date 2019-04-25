import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price : {props.price.toFixed(2)} PLN</p>
        {controls.map(ctrl => (
            <BuildControl 
                labelName={ctrl.label}
                key={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabledLess={props.disabledLess[ctrl.type]}
                disabledMore={props.disabledMore[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
        >MAKE AN ORDER</button>
    </div>
);

export default buildControls;