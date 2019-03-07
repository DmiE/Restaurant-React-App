import React from 'react';

import ReactAux from '../../../hoc/ReactAux';
import Button from '../../UI/Button/Button';

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
            <p>Price : {props.burgerPrice.toFixed(2)} PLN</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </ReactAux>
    )
}

export default orderSummary;