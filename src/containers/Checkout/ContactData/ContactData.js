import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h2>Type your data</h2>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="E-mail"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postalCode" placeholder="Postal Code"/>
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>

        )
    }

}

export default ContactData;