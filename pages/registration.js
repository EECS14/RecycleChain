/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu, Form, Button, Input, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import registerContract from '../ethereum/register'; // import SC instance
import Layout from '../components/Layout';

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
            inputSize: 0,
            errorMessage: '',
            hasNoError: false,
            errorMessage1: '',
            hasNoError1: false,
            errorMessage2: '',
            hasNoError2: false, 
            loading: false
        };
    }

    // Dynamic fields appear based on number of sorting machines 
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

    //Register a Manufactuerer & interact with the register SC
    onRegisterManu = async (event) => {

        event.preventDefault(); // prevents the browser from submitting the form immediately

        const accounts = await web3.eth.getAccounts();

        this.setState({loading: true, errorMessage: ''});

        try {

            await registerContract.methods
                .registerManufactuerer(this.state.manufacturerAddr, this.state.manufacturerLocation, this.state.manufacturerName)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

            this.setState({loading: false});
    };


    //Register a buyer & interact with the register SC
    onRegisterBuyer = async (event) => {

        event.preventDefault();
    
        const accounts = await web3.eth.getAccounts();

        this.setState({loading: true, errorMessage1: ''});

        try {
            await registerContract.methods
                .registerBuyer(this.state.buyerAddr, this.state.buyerName, this.state.buyerLocation, this.state.buyerBusiness)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage1: err.message });
            this.setState({ hasError1: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage1)
            this.setState({ hasNoError1: true });

            this.setState({loading: false});
    };

    //Register a sorting facility & interact with the register SC
    onRegisterSeller = async (event) => {

        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({loading: true, errorMessage2: ''});

        try {

            await registerContract.methods
                .registerSeller(this.state.sellerAddr, this.state.sellerLocation, this.state.sellerName, this.state.sortingMachines)
                .send({ from: accounts[0] });
        } catch (err) {
            this.setState({ errorMessage2: err.message });
            this.setState({ hasError2: false });
        }

        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage2)
            this.setState({ hasNoError2: true });

            this.setState({loading: false});
    };



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

            <Layout>
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

                    
                        <Form onSubmit={this.onRegisterManu} error={!!this.state.errorMessage} success={this.state.hasNoError}>
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

                            <Message error header="Error!" content={this.state.errorMessage} />


                            <Message success header="Success!" content="Manufactuerer registered successfully!" />


                            <Button loading={this.state.loading} type='submit'>Register</Button>
                        </Form>


                )}

                {selectBuyer && (
                    <Form onSubmit={this.onRegisterBuyer} error={!!this.state.errorMessage1} success={this.state.hasNoError1} >
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

                        <Message error header="Error!" content={this.state.errorMessage1} />

                        <Message success header="Success!" content="Buyer registered successfully!" />

                        <Button loading={this.state.loading} type='submit'>Register</Button>
                    </Form>

                )}

                {selectSortingFacility && (

                    <Form onSubmit={this.onRegisterSeller} error={!!this.state.errorMessage2} success={this.state.hasNoError2}>
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
                            <input type="number" name="quantity" min="1" max="7" placeholder="Select number of machines in facility" onChange={(value) => this.handleOnChange(value)} />
                            <div>
                                {this.renderInputs(this.state.inputSize)}
                            </div>
                        </Form.Field>

                        <Message error header="Error!" content={this.state.errorMessage2} />

                        <Message success header="Success!" content="Seller registered successfully!" />

                        <Button  loading={this.state.loading} type='submit'>Register</Button>
                    </Form>

                )}


            </div>
            </Layout>
        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default registrationPage; 