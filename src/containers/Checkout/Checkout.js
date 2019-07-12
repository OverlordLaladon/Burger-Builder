import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { tsImportEqualsDeclaration } from '@babel/types';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount() {
        //Load the selected ingredients into the checkout burger
        const query = new URLSearchParams(this.props.location.search);
        //console.log(11, query);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            //['salad', '1']
            //getting the total price is different from ingredients that go in the else statement
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price });
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    //using the render method (insted of component), we can pass props for te component
                    //component={ContactData}
                    //manually passing all props to use history prop later in ContactDetails
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)}
                />
            </div>
        );
    }
}

export default Checkout;
