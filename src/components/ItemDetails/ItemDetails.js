import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
   constructor(props) {
      super(props);
      this.state = {
         open: false
      };
   }
   render() {
      return (
         <div>
            <Button
               variant="link"
               className="item-details-button"

               onClick={() => this.setState({ open: !this.state.open })}
            >
               {this.state.open === false ? `See` : 'Hide '} item details
               {this.state.open === false ? ` +` : ' -'}
            </Button>
            <Collapse in={this.state.open}>
               <div>

                  <Media>
                     <img
                        className="align-self-center mr-3"
                        width={100}
                        height={100}
                        alt="thumbnail"
                        src="https://d3o372dlsg9lxo.cloudfront.net/catalog/products/d8228/images/grid/5cf04859642ab606a88ee7cd/Dexter_Leather_Chair_Lounge_Arm_LeatherSaddle_DexterWalnutWood_D8228.jpg"

                     />
                     <Media.Body>
                        <p>DEXTER LEATHER LOUNGE CHAIR</p>
                        <Row className="show-grid">
                           <Col md={6}>
                              <strong>{`₹ ${this.props.price}`}</strong>
                              <br />
                              <strong className="price-strike">{`₹ ${this.props.price}`}</strong>
                           </Col>
                           <Col md={6}>Qty: 1</Col>
                        </Row>
                     </Media.Body>

                  </Media>


               </div>
            </Collapse>
         </div>
      )
   }
}