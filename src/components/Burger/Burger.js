import React from 'react';
import BurgerIngrediend from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients) // take keys from Ingredients Object
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { // Create empty array for any Key from Object 
                return <BurgerIngrediend key={igKey + i} type={igKey} ingredients={props.ingredients}/>; // Return BurgerIngredient comp with uniq key
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []); // reduce function reduce 4 arrays created in transformIngredients into One
    
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please Add Some Ingredients!</p>
    }
    return (
    <div className={classes.Burger}>
        <BurgerIngrediend type="bread-top"/>
        {transformedIngredients}
        <BurgerIngrediend type="bread-bottom"/>

    </div>)
}

export default Burger;