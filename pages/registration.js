/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu, Form, Button, Input, Transition } from 'semantic-ui-react';

//import registerContract from '../ethereum/register'; // import SC instance

class registrationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectManufacturer: false,
            selectSortingFacility: false,
            selectBuyer: false,
            manufacturerName: '',
            manufacturerAddr: '',
            manufacturerLocation: '',
            buyerName: '',
            buyerAddr: '',
            buyerLocation: '',
            buyerBusiness: '',
            sellerName: '',
            sellerAddr: '',
            sellerLocation: '',
            sortingMachines: [],
            inputSize: 0
        };
    }

    handleOnChange(value) { this.setState({ inputSize: value.target.value }); }

    renderInputs(value) {
        const inputs = [];
        for (let i = 0; i < value; i++) {
            inputs.push(<div>
                <Input value={this.state.sortingMachines[i]}
                    onChange={(event) => {
                        const newSortingMachines = [...this.state.sortingMachines];
                        newSortingMachines[i] = event.target.value;
                        this.setState({ sortingMachines: newSortingMachines })
                    }}
                    icon="ethereum" />
            </div>
            )

            for (let i = 0; i < value; i++) {
                console.log(this.state.sortingMachines[i]);
            }
        }
        return inputs;
    }

    render() {

        console.log(this.state.inputSize);

        const {
            selectManufacturer,
            selectSortingFacility,
            selectBuyer,
            manufacturerName,
            manufacturerAddr,
            manufacturerLocation,
            buyerName,
            buyerAddr,
            buyerLocation,
            buyerBusiness,
            sellerName,
            sellerAddr,
            sellerLocation,
            sortingMachines } = this.state


        return (

            <div className="Selection ">
                <h1>Welcome to Registration Page</h1>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                <h2>Select a stakeholder to register:</h2>
                <Menu widths={3}>
                    <Menu.Item name='Manufacturer' onClick={() => this.setState({ selectManufacturer: true, selectSortingFacility: false, selectBuyer: false })} > Manufacturer</Menu.Item>
                    <Menu.Item name='SortingFacility' onClick={() => this.setState({ selectSortingFacility: true, selectManufacturer: false, selectBuyer: false })} > Sorting Facility</Menu.Item>
                    <Menu.Item name='Buyer' onClick={() => this.setState({ selectBuyer: true, selectSortingFacility: false, selectManufacturer: false })} > Buyer </Menu.Item>
                </Menu>

                {selectManufacturer && (

                    <Form>
                        <Form.Field width={6}>
                            <label>Manufacturer Name</label>
                            <Input value={this.state.manufacturerName}
                                onChange={event => this.setState({ manufacturerName: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Manufacturer Address</label>
                            <Input value={this.state.manufacturerAddr}
                                icon="ethereum"
                                onChange={event => this.setState({ manufacturerAddr: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Manufacturer Location</label>
                            <Input value={this.state.manufacturerLocation}
                                onChange={event => this.setState({ manufacturerLocation: event.target.value })} />
                        </Form.Field>
                        <Button type='submit'>Register</Button>
                    </Form>

                )}

                {selectBuyer && (
                    <Form>
                        <Form.Field width={6}>
                            <label>Buyer Name</label>
                            <Input value={this.state.buyerName}
                                onChange={event => this.setState({ buyerName: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Buyer Address</label>
                            <Input value={this.state.buyerAddr}
                                icon="ethereum"
                                onChange={event => this.setState({ buyerAddr: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Buyer Business Type</label>
                            <Input value={this.state.BuyerBusiness}
                                onChange={event => this.setState({ buyerBusiness: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Buyer Location</label>
                            <Input value={this.state.buyerLocation}
                                onChange={event => this.setState({ buyerLocation: event.target.value })} />
                        </Form.Field>
                        <Button type='submit'>Register</Button>
                    </Form>

                )}

                {selectSortingFacility && (

                    <Form>
                        <Form.Field width={6}>
                            <label>Sorting Facility Name</label>
                            <Input value={this.state.sellerName}
                                onChange={event => this.setState({ sellerName: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Sorting Facility Address</label>
                            <Input value={this.state.sellerAddr}
                                icon="ethereum"
                                onChange={event => this.setState({ sellerAddr: event.target.value })} />
                        </Form.Field>
                        <Form.Field width={6}>
                            <label>Sorting Facility Location</label>
                            <Input value={this.state.sellerLocation}
                                onChange={event => this.setState({ sellerLocation: event.target.value })} />
                        </Form.Field>

                        <Form.Field width={6}>
                            <label>Sorting Machines Address</label>
                            <input type="number" name="quantity" min="1" max="7" onChange={(value) => this.handleOnChange(value)} />
                            <div>
                                {this.renderInputs(this.state.inputSize)}
                            </div>
                        </Form.Field>

                        <Button type='submit'>Register</Button>
                    </Form>

                )}


            </div>
        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default registrationPage; 