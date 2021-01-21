import React, { Component } from 'react';
import {Button, Message, Form, Dropdown} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import bottleContract from '../ethereum/bottleProduction';
import QrCode from 'react.qrcode.generator'

//Dropdownmenu selections
const bottleTypesOptions = [
    { key: 1, text: 'PET (Polyethylene Terephthalate)', value: 0 },
    { key: 2, text: 'LDPE/HDPE (Low- and High-Density Polyethylene)', value: 1 },
    { key: 3, text: 'PP (Polypropylene)', value: 2 },
    { key: 4, text: 'PC (Polycarbonate)', value: 3 },
]

const bottleColorOptions = [
    { key: 1, text: 'Clear', value: 0 },
    { key: 2, text: 'White', value: 1 },
    { key: 3, text: 'Red', value: 2 },
    { key: 4, text: 'Blue', value: 3 },
    { key: 4, text: 'Black', value: 4 },
]

const bottleSizeOptions = [
    { key: 1, text: '100 mL', value: 0 },
    { key: 2, text: '200 mL', value: 1 },
    { key: 3, text: '330 mL', value: 2 },
    { key: 4, text: '500 mL', value: 3 },
    { key: 4, text: '1.5L', value: 4 },
]

class manufacturingMachinePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerSCAddress: '0x7126ec4f68added009015a1f5ac718c4896faa2e',
            bottleType: '',
            bottleColor: '',
            bottleSize: '',
            bottleQR:'',
            errorMessage: '',
            hasNoError: false,
            QRcodePic: false
        };
    }
    

    //produce bottle QR code

    onSubmit = async (event) => {

        event.preventDefault(); // prevents the browser from submitting the form immediately
    
        const accounts = await web3.eth.getAccounts();
    
        try {
    
            await bottleContract.methods
                .registerBottle(this.state.registerSCAddress, this.state.bottleType, this.state.bottleColor, this.state.bottleSize)
                .send({ from: accounts[0] });

        } catch (err) {

            this.setState({ errorMessage: err.message });
            this.setState({ hasError: false });

        }
    
        // if errorMsg is empty, registration is successful
        if (!this.state.errorMessage)
            this.setState({ hasNoError: true });

    };

    onGenerate = async (event) =>{
            this.state.bottleQR = await  bottleContract.methods.getBottleAddress().call();
            console.log(this.state.bottleQR);
            this.setState({QRcodePic:true});

    }

    handleChangeType = (e, { value }) => this.setState({bottleType: value })
    handleChangeColor = (e, { value }) => this.setState({bottleColor: value })
    handleChangeSize = (e, { value }) => this.setState({bottleSize: value })

    render(){
        const { value } = this.state

        return(
            <div> 
                <h2>Bottle Production Page</h2>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css" />
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={this.state.hasNoError}>
                    <Form.Field width={6}><label>Bottle Material:   </label>
                        <Dropdown 
                        placeholder='Choose Bottle Material'
                        clearable 
                        options={bottleTypesOptions} 
                        selection
                        onChange={this.handleChangeType} />
                    </Form.Field>

                    <Form.Field width={6}><label>Bottle Color:   </label>
                        <Dropdown 
                        placeholder='Choose Bottle Color'
                        clearable 
                        options={bottleColorOptions} 
                        selection
                        onChange={this.handleChangeColor} />
                    </Form.Field>

                    <Form.Field width={6}><label>Bottle Size:   </label>
                        <Dropdown 
                        placeholder='Choose Bottle Size'
                        clearable 
                        options={bottleSizeOptions} 
                        selection
                        onChange={this.handleChangeSize} />
                    </Form.Field>

                    <Message error header="Error!" content={this.state.errorMessage} />


                    <Message success header="Success!" content="QR code generated successfully!" />


                    <Button type='submit'>Submit</Button>
                </Form>

                <label>{this.state.bottleQR}</label>
                <h1>{ this.state.QRcodePic == true ? <QrCode value={this.state.bottleQR} QrCode size = {'400'}/> : '' } </h1> 
            
                <Form onSubmit={this.onGenerate}>
                    <Button type='submit'>Generate QR Code</Button>
                </Form>
            </div>
        );
    }
}
export default manufacturingMachinePage; 