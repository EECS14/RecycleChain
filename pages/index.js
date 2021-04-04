/*
This is the index page which will be the first page of the dapp to run
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Image from 'next/image'; 


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'about'
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Layout>
                <div>
                    <link rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                    />
                <style jsx>{`
                           
          @media (max-width: 600px) {
           div {
              }
        }
            .features, .statistics{
                display: grid;
                grid-template-columns: 50% 50%;
                grid-auto-rows: 150px;
                column-gap: 15px;
                row-gap: 15px;
            }
            .feature {
                height:100%;
            }

            .feature p {
                height:70%;
                padding:10px;
            }

            .statistic p{
                text-align:center;
            }

            .center{
                Display: flex;
                Width: 100%; 
                Align-Items: center;
                Justify-Content: center;
            }

      `}</style>


                    <Menu text>
                        <Menu.Item
                            name='about'
                            active={activeItem === 'about'}
                            onClick={this.handleItemClick}
                        >
                            About
                </Menu.Item>

                        <Menu.Item
                            name='features'
                            active={activeItem === 'features'}
                            onClick={this.handleItemClick}
                        >
                            Features
                </Menu.Item>

                        <Menu.Item
                            name='stats'
                            active={activeItem === 'stats'}
                            onClick={this.handleItemClick}
                        >
                            Statistics
                </Menu.Item>
                    </Menu>

                    {(activeItem === 'about') && (
                        <div>
                            <div className="about" style={{padding:'0'}}>
                                <div className="center">
                                    <Image className="logo" src='/blockchain.jpg' alt="Blockchain" width="200" height="200" />
                                </div>
                                
                                <h1>RecycleChain</h1>
                                <p>Recycle Chain is a system that tokenizes recycleable plastic waste to provide transparent post-consumer plastic waste management and real-time tracking of disposed plastic waste to different stakeholders. Recyclers who participate in recycling are rewarded with Ether!
                                </p>
                            </div>

                        </div>
                    )}

                    {(activeItem === 'features') && (
                        <div className="featuresSection">
                            <h2>Features</h2>
                            <div className="features"  style={{float:'left'}} >
                                <div className="feature">
                                    <h4>Transparent Transactions</h4>
                                    <p>Transaction performed by the system can  be viewed publicly on Etherscan</p>
                                </div>

                                <div className="feature">
                                    <h4>Cryptographically Protected</h4>
                                    <p>Transactions are digitally signed by users  private key</p>
                                </div>

                                <div className="feature">
                                    <h4>No Deletion or Alteration</h4>
                                    <p>System records are stored on Ethereum Blockchain</p>
                                </div>

                                <div className="feature">
                                    <h4>Distributed Control</h4>
                                    <p>System is hosted on a private Ethereum Network encompassed on stakeholder nodes.</p>
                                </div>
                            </div>
                            
                        </div>
                    )}

                    {(activeItem === 'stats') && (
                        <div className="statSection">
                            <h2>Statistics</h2>
                            <br/>
                            <div className="statistics" style={{width:'50%', margin:'auto'}}>
                                <div className="statistic">
                                    <h1>9.4K</h1>
                                    <p>Bottles recycled</p>
                                </div>

                                <div className="statistic">
                                    <h1>234</h1>
                                    <p>Rewarded users</p>
                                </div>

                                <div className="statistic">
                                    <h1>87+</h1>
                                    <p>Countries</p>
                                </div>

                                <div className="statistic">
                                    <h1>$58</h1>
                                    <p>Revenue per hour</p>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        )
    }
}
