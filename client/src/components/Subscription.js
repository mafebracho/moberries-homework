import React, { Component } from 'react';
import axios from 'axios';
// ℹ️ package responsible to make the the next and back buttons
// because of its documentation I named my files Step1 Step2 and Step3
// https://www.npmjs.com/package/react-step-wizard
import StepWizard from 'react-step-wizard';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

import 'bootstrap/dist/css/bootstrap.min.css';

class Subscription extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDuration: 12,
            selectedStorage: 5,
            isUpfront: false,
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            tacChecked: false,
            subscriptionPlans: null,
            price: 24
        }
        this.changeDuration = this.changeDuration.bind(this)
        this.changeStorage = this.changeStorage.bind(this)
        this.changeUpfront = this.changeUpfront.bind(this)

        this.changeChecked = this.changeChecked.bind(this)

        this.confirmPurchase = this.confirmPurchase.bind(this)
    }

    componentDidMount() {
        // get subscription plan
        axios
        .get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(res => {
            // console.log(res)
            this.setState({ subscriptionPlans: res.data.subscription_plans })
        })
    }

    // Step 1 handles
    // I am aware it is not the fanciest solution, but it works and can refractor later if I have time
    changeDuration(event) {
        this.setState({ 
            selectedDuration: parseInt(event.target.value),
         })
         for (var i = 0; i < this.state.subscriptionPlans.length; i++) {
            if (this.state.subscriptionPlans[i].duration_months === parseInt(event.target.value)) {
                var price = this.state.subscriptionPlans[i].duration_months * this.state.subscriptionPlans[i].price_usd_per_gb
                if (this.state.isUpfront) {
                    price = price * 0.9
                }
                this.setState({
                    price: price
                })
            }
         }
    }

    changeStorage(event) {
        this.setState({ selectedStorage: parseInt(event.target.value) })
    }

    changeUpfront(event) {
        this.setState({ isUpfront: event.target.value === 'true' })
    }

    // Step 2 handles
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
      }
      
      handleInputChange = (e) => {
        const { name, value } = e.target;
        
        this.setState({ [name]: value });
      }

    //   Step 3 handles
    confirmPurchase() {
        // console.log('confirm')
        axios
        .post('https://httpbin.org/post', this.state)
        .then(res => {
            console.log(res)
        })
    }

    changeChecked(event) {
        this.setState({ tacChecked: !this.state.tacChecked })
    }

    render() {
        console.log(this.state)
        return (
            <StepWizard>
            <Step1 changeDuration = {this.changeDuration} changeStorage = {this.changeStorage} changeUpfront = {this.changeUpfront} subscriptionPlans = {this.state.subscriptionPlans} />
            <Step2 handleInputFocus = {this.handleInputFocus} handleInputChange = {this.handleInputChange} />
            <Step3 confirmPurchase = {this.confirmPurchase} changeChecked = {this.changeChecked} />
            </StepWizard>
        )
    }

}

export default Subscription;