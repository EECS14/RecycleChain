import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import trackingContract from '../../ethereum/tracking';
import plasticBaleContract from '../../ethereum/plasticBale';
import { Link } from '../../routes';

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
        this.setState((prevState) => {
            let items = { header: this.state.auctionAddr, description: <a>Join Auction</a>, fluid: true, meta: this.state.closingTime, extra: this.state.startingPrice};
            return { cards: [...prevState.cards, items] };
        });

    };



    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Open Auctions</h1>
                
                {this.state.cards.map(items => (
                    <Link route={`/auctions/viewbales/${items.header}`}>

                       <Card header={items.header}
                            stackable='true'
                            meta={items.meta}
                            extra = { items.extra }
                            description = { items.description }
                            fluid = {items.fluid } />

                    </Link>
        )) }
       
                
            </div>
        );
    }

}

export default viewauctions; 