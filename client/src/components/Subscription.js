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
                { this.state.subscriptionPlans.map((value, index) => {
                    return <div key={value.id}>{value.duration_months}</div>
                }) }
            </div>
        )
    }

}

export default Subscription;