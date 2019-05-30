import React, { Component } from 'react';

import ReactAux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import errorHandler from '../../hoc/errorHandler/ErrorHandler'

const INGREDIENT_PRICES = {
    salad: 1.50,
    cheese: 3,
    meat: 6,
    bacon: 3
}

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        orderLoading: false,
        error: false
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('https://restaurant-react-app.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data })})
            .catch(error => {
                this.setState({error: true})
            });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinueHandler = () => {
        // this.setState({ orderLoading: true })

        // let postOrder = {
        //     ingredients: this.state.ingredients,
        //     totalPrice: this.state.totalPrice,
        //     customer: {
        //         name: 'Dave Mie',
        //         address: {
        //             city: 'Kraków',
        //             country: 'Poland',
        //             street: 'Krowoderska',
        //             zipcode: '33-334'
        //         }
        //     }
        // }

        // axios.post('/orders.json', postOrder)
        //     .then(this.setState({ orderLoading: false, purchasing: false }))
        //     .catch(this.setState({ orderLoading: false, purchasing: false }))

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    updatePurchaseState = (ingredients) => {
        const purchasableAray = Object.values(ingredients).reduce((acc, curr) => acc + curr);
        const newPurchase = (purchasableAray > 0);
        this.setState({ purchasable: newPurchase });

    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disabledLessInfo = {
            ...this.state.ingredients
        };

        for (let i in disabledLessInfo) {
            disabledLessInfo[i] = disabledLessInfo[i] <= 0;
        }

        const disabledMoreInfo = {
            ...this.state.ingredients
        };

        for (let i in disabledMoreInfo) {
            disabledMoreInfo[i] = disabledMoreInfo[i] >= 2;
        }

        let burger = this.state.error ? <p>The app is broken - cannot load ingredients</p> : <Spinner />

        let orderSummary = null;

        if (this.state.ingredients) {
            burger = (
                <ReactAux>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabledLess={disabledLessInfo}
                        disabledMore={disabledMoreInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler} />
                </ReactAux>)

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                purchaseContinue={this.purchaseContinueHandler}
                purchaseCancel={this.purchaseCancelHandler}
                burgerPrice={this.state.totalPrice} />;
        }

        if (this.state.orderLoading) {
            orderSummary = <Spinner />;
        }

        return (
            <ReactAux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </ReactAux>
        );
    }
}

export default errorHandler(BurgerBuilder, axios);