import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';
import { Link } from '../../routes';


class viewbales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plasticBaleAddr: '',
            productionTime: '',
            cards: []

        };
    }

    componentDidMount = async () => {

        //1. Fetch data from event 
        const accounts = await web3.eth.getAccounts();
        //NOTE: Set the account back to account[0]
        trackingContract.events.plasticBaleCompleted({
            filter: { sellerAddress: accounts[1] }, fromBlock: 0
        }, function (error, event) {
            /*Debugging 
            console.log(event); */

            //1. Fetch data from event 
            var time = new Date(event.returnValues['time'] * 1000);
            var date = time.toString(); 
            this.setState({
                plasticBaleAddr: event.returnValues['plasticbale'],
                productionTime: date
            });
            //2. Render bale info to the page 
            this.renderBales();
            
        }.bind(this))
            .on('error', console.error);

        /* Debugging 
        await trackingContract.methods.getDeployedBales().call().then(console.log); 
         */

    };


    renderBales() {
        this.setState((prevState) => {
            const items = { header: this.state.plasticBaleAddr, description: <a>Auction Bale</a>, fluid: true, meta: this.state.productionTime };
            return { cards: [...prevState.cards, items] };
        });

    }


    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Plastic Bales produced at Your Facility</h1>
                {this.state.cards.map(items => (
                    <Link route={`/auctions/viewbales/${items.header}`}>
                        <Card header={items.header}
                            meta={items.meta}
                            description={items.description}
                            fluid={items.fluid} />
                    </Link>
                ))}


            </div>
        );
    }

}

export default viewbales; 