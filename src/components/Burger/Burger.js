import React from 'react';
import BurgerIngrediend from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = () => {
    return (
    <div className={classes.Burger}>
        <BurgerIngrediend type="bread-top"/>
        <BurgerIngrediend type="cheese"/>
        <BurgerIngrediend type="meat"/>
        <BurgerIngrediend type="bread-bottom"/>
    </div>)
}

export default Burger;