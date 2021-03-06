import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/checkoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients:{
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render () {
        return (
            <div>
            <CheckoutSummary 
                checkoutContinue={this.checkoutContinueHandler} 
                checkoutCancel={this.checkoutCancelHandler} 
                ingredients={this.state.ingredients} />
            <Route 
                path={this.props.match.path + '/contact-data'} 
                component={ContactData}/>
            </div>
        )
    }
}

export default Checkout;