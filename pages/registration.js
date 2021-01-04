/*
This is the registration page where the goverment entity registers stakeholders 
Contact used here: an instance of register.sol 
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

//import registerContract from '../ethereum/register'; // import SC instance

class registrationPage extends Component {

    constructor(props) { // might not be needed 
        super(props);
        this.state = {
           selectManufacturer: false,
           selectSortingFacility: false,
           selectBuyer: false
        };
    }

    async componentDidMount() {
        //This is not executed on the server 
        //await registerContract.methods.registerManufactuerer.send(); 
    }

    render() {

        const { selectManufacturer,selectSortingFacility, selectBuyer } = this.state

        return (

            <div className="Selection ">
                <h1>Welcome to Registration Page</h1>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                <h2>Select a stakeholder to register:</h2>
                <Menu widths={3}>
                    <Menu.Item name='Manufacturer' onClick={() => this.setState({ selectManufacturer: true,selectSortingFacility: false, selectBuyer: false  })} > Manufacturer</Menu.Item>
                    <Menu.Item name='SortingFacility' onClick={() => this.setState({  selectSortingFacility: true, selectManufacturer: false,selectBuyer: false    })} > Sorting Facility</Menu.Item>
                    <Menu.Item name='Buyer' onClick={() => this.setState({ selectBuyer: true, selectSortingFacility: false,selectManufacturer: false  })} > Buyer </Menu.Item>
                </Menu>

                {selectManufacturer && (<h3> send help!</h3>)}



            </div>
        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default registrationPage; 