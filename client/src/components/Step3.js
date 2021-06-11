import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class Step3 extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.changeChecked = this.changeChecked.bind(this)
    }

    changeChecked(event) {
        this.setState({ tacChecked: !this.state.tacChecked })
        this.changeChecked(event)
    }

    render() {
        return (
            <div>
                <p>Summary</p>
                <Form.Check
                onChange={this.props.changeChecked}
                checked={this.props.tacChecked}
                type='checkbox'
                label='accept terms and conditions'
                />
                <Button onClick={this.props.confirmPurchase}>Confirm</Button>
                <p><Button onClick={this.props.previousStep}>Back</Button></p>
            </div>
        )
    }
}

export default Step3;