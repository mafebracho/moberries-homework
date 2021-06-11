import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-credit-cards/es/styles-compiled.css';

class Step2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            email: '',
        }
    }

    handleInputFocus = (event) => {
        this.setState({ focus: event.target.name });
        this.props.handleInputFocus(event)
      }
      
      handleInputChange = (event) => {
        const { name, value } = event.target;
        
        this.setState({ [name]: value });
        this.props.handleInputChange(event)
      }
      
      render() {
        return (
          <div id="PaymentForm">
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              email={this.state.email}
            />
            <form>

                <input
                type="tel"
                name="email"
                placeholder="E-Mail"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

                <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            
              
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                />
              
              
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                />
              
            </form>
            <p><Button onClick={this.props.previousStep}>Back</Button></p>
            <p><Button onClick={this.props.nextStep}>Next</Button></p>
          </div>
        );
      }
}

export default Step2;