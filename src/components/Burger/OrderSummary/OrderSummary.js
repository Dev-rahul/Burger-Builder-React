import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span></li>
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p> Your Burger has the following :</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btntype='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btntype='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    )
};

export default orderSummary;

