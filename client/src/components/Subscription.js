import React, { Component } from 'react';
import axios from 'axios';

class Subscription extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDuration: 12,
            selectedStorage: 5,
            isUpfront: false
        }

        this.changeDuration = this.changeDuration.bind(this)
        this.changeStorage = this.changeStorage.bind(this)
        this.changeUpfront = this.changeUpfront.bind(this)
    }

    componentDidMount() {
        // get subscription plan
        axios
        .get('https://cloud-storage-prices-moberries.herokuapp.com/prices')
        .then(res => {
            console.log(res)
            this.setState({ subscriptionPlans: res.data.subscription_plans })
        })
    }

    changeDuration(event) {
        this.setState({ selectedDuration: parseInt(event.target.value) })
    }

    changeStorage(event) {
        this.setState({ selectedStorage: parseInt(event.target.value) })
    }

    changeUpfront(event) {
        this.setState({ isUpfront: event.target.value === 'true' })
    }

    render() {
        if (!this.state || !this.state.subscriptionPlans) return <div/>
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