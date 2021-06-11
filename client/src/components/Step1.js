import React, { Component } from 'react';
import { Button, Container, Row, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

class Step1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedDuration: 12,
            selectedStorage: 5,
            isUpfront: false
        }
    }

    render() {
        console.log(this.props.subscriptionPlans)
        if (!this.props || !this.props.subscriptionPlans) return <div/>
        return (         
            <div>
            <h1>hola</h1>
             <Container className="my-4">
                 <Row className="d-inline-block">
                     <h1>Upgrade to a plan that works for you</h1>
                     <h3 className="pt-4">Select Duration</h3>
                     <ButtonGroup className="pt-2" onClick={this.props.changeDuration}>
                         {
                             this.props.subscriptionPlans.map((value, index) => {
                                 return (
                                     <Button
                                         key={index}
                                         variant="primary"
                                         active={value.duration_months === this.state.selectedDuration}
                                         value={value.duration_months}
                                     >
                                         { value.duration_months} Months ({ value.price_usd_per_gb } USD / GB)
                                     </Button>
                                 )
                             })
                         }
                     </ButtonGroup>
                     <h3 className="pt-4">Select Storage</h3>
                     <ButtonGroup className="pt-2" onClick={this.props.changeStorage}>
                         <Button variant="primary" active={this.state.selectedStorage === 5} value={5}>5 GB</Button>
                         <Button variant="primary" active={this.state.selectedStorage === 10} value={10}>10 GB</Button>
                         <Button variant="primary" active={this.state.selectedStorage === 50} value={50}>50 GB</Button>
                     </ButtonGroup>
                     <h3 className="pt-4">Select Upfront Payment</h3>
                     <ButtonGroup className="pt-2" onClick={this.props.changeUpfront}>
                         <Button variant="primary" active={this.state.isUpfront === true} value={true}>Yes</Button>
                         <Button variant="primary" active={this.state.isUpfront === false} value={false}>No</Button>
                     </ButtonGroup>
                 </Row>
             </Container>
            <p><Button onClick={this.props.nextStep}>Next</Button></p>
            </div>
        )
    }

}

export default Step1;