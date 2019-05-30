import React from 'react';

import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <div style={{width: '100%', margin: 'auto'}}>
            <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.checkoutCancel}>CANCEL</Button>
            <Button btnType='Succes' clicked={props.checkoutContinue}>CONTINUE</Button>
        </div>
    )
} 

export default checkoutSummary;