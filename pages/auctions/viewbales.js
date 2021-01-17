import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';


class viewbales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plasticBaleAddr: '',
            plasticBale: [],
            contributorsAddresses: [],
            productionTime: '',
            cards: []

        };
    }

    componentDidMount = async () => {

        const accounts = await web3.eth.getAccounts();
        //NOTE: Set the account back to account[0]
        trackingContract.events.plasticBaleCompleted({
            filter: { sellerAddress: accounts[1] }, fromBlock: 0
        }, function (error, event) {
            //Debugging 
            console.log(event);

            var time = new Date(event.returnValues['time'] * 1000);
            var date = time.toUTCString();

            this.setState({
                plasticBaleAddr: event.returnValues['baleAddress'],
                plasticBale: event.returnValues['plasticBale'],
                contributorsAddresses: event.returnValues['plasticBaleContributorsAddresses'],
                productionTime: date
            });
            this.renderBales();
        }.bind(this))
            .on('error', console.error);

    };


    renderBales(){
        this.setState((prevState) => {
            const items = { header: this.state.plasticBaleAddr, description: <a>Acution Bale</a>, fluid: true, meta: this.state.productionTime};
            return { cards: [...prevState.cards, items] };
        });

    }


    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Plastic bales produced at your facility</h1>
                {this.state.cards.map(items => (
                    <Card header={items.header} meta={items.meta} description={items.description} fluid={items.fluid} />
                ))}
               

            </div>
        );
    }

}

export default viewbales; 