import React from 'react';

import ReactAux from '../../../hoc/ReactAux';

const orderSummary = (props) => {
    const OrderedIngredients = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    })

    return (
        <ReactAux>
            <h3>Your Order</h3>
            <p>A burger with the folowing ingredients:</p>
            <ul>
                {OrderedIngredients}
            </ul>
        </ReactAux>
    )
}

export default orderSummary;