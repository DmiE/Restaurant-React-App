import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
       // let ingredients = this.props.ingredients
        let meatStyle = {zIndex: '20'}
        let cheeseStyle = {zindex: '30'}
        let saladStyle = {zIndex: '50'}
        let baconStyle = {zIndex: '40'}
        
        // TODO: dodać counter odpowiednio podnoszacy z-index

        /*if (ingredients[this.props.type]){
            console.log(ingredients)
        }
*/

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}></div>
                break;
            case ('meat'):
                ingredient = <div style={meatStyle} className={classes.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div style={cheeseStyle} className={classes.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div style={saladStyle} className={classes.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div style={baconStyle} className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;