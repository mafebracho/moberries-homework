import React, { Component } from 'react';
import axios from 'axios';

class Subscription extends Component {

    state = {
        subscriptionPlans: []
    }

    componentDidMount() {
        axios
        .get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(res => {
            console.log(res)
            const subscriptionPlans = res.data.subscription_plans;
            this.setState({subscriptionPlans: subscriptionPlans})
        })
    }

    render() {
        return (
            <div>
            <h1>Upgrade to a plan that works for you</h1>
                { this.state.subscriptionPlans.map((value, index) => {
                    return (
                        <div key={index}>
                            <button> {value.duration_months} </button>
                            <button> {value.price_usd_per_gb} </button>
                        </div>
                    )
                }) }
            </div>
        )
    }

}

export default Subscription;