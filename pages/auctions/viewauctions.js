import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';
import plasticBaleContract from '../../ethereum/plasticBale';
import { Link } from '../../routes';
import Layout from '../../components/Layout';

class viewauctions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            closingTime: '',
            startingPrice: '',
            auctionAddr: ''
        };
    }


    componentDidMount = async () => {

        const accounts = await web3.eth.getAccounts();
        //NOTE: Set the account back to account[0] - seller address is account 2
        trackingContract.events.plasticBaleCompleted({
            filter: { sellerAddress: accounts[0] }, fromBlock: 0
        }, function (error, event) {
            //Debugging 
            console.log(event);
            //1. Fetch plastic bale addresses which are contract addresses/auction addresses from plasticBaleCompleted
            const plasticbaleAddr = event.returnValues['plasticbale'];
            console.log(plasticbaleAddr);
            //2. Create a new instance 
            const plasticBaleSC = plasticBaleContract(plasticbaleAddr);
            //3. Check auctionStarted events 

            plasticBaleSC.events.auctionStarted({
                filter: { baleAddress: plasticbaleAddr },
                fromBlock: 0
            }, function (error, event) {
                console.log(event);
                //4. Extract Auction data from event
                var time = new Date(event.returnValues['closingTime'] * 1000);
                var date = time.toString();
                this.setState({
                    auctionAddr: event.returnValues['baleAddress'],
                    closingTime: date,
                    startingPrice: event.returnValues['startingAmount']
                });

                //5. Render card on webpage
                this.renderAuctions();

            }.bind(this))
                .on('error', console.error);

        }.bind(this))
            .on('error', console.error);


    };


    renderAuctions = () => {
        // Add more information here like the seller name 
        this.setState((prevState) => {
            let items = { header: this.state.auctionAddr, description: <a>Auction Details</a>, fluid: true, meta: `Closing Time: ` + this.state.closingTime , extra: `Starting Price: ` +this.state.startingPrice + ` Wei` };
            return { cards: [...prevState.cards, items] };

        });

    };



    render() {

        return (
            <Layout>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />


                    <p> paragraph and instructions on joining auctions as a buyer + how recyclers are rewarded</p>

                <h1>Open Auctions</h1>
                <Card.Group>
                {this.state.cards.map(items => (
                    <Link route={`/auctions/viewauctions/${items.header}`}>
                        
                       <Card header={items.header}
                            stackable='true'
                            meta={items.meta}
                            extra = { items.extra }
                            description = { items.description }
                            fluid = {items.fluid } />

                    </Link>
        )) }      </Card.Group>
       
                
            </Layout>
        );
    }

}

export default viewauctions; 