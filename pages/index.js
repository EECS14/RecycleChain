/*
This is the index page which will be the first page of the dapp to run
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import Layout from '../components/Layout';
//import buildingsImg from '../resources/images/buildings.jpg'; // does not work for some reason

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
                            <div className="about"> 
                                <h1>Recycle Chain</h1>
                                <p>Recycle Chain is a system that digitizes recycleable plastic waste to provide transparency of post-consumer plastic waste management and real-time tracking of disposed plastic waste to different stakeholders. It rewards users with Ether for participating in environment friendly practices such as recycling.</p>
                            </div>

                        </div>
                    )}

                    {(activeItem === 'features') && (
                        <div className="features">
                            <div className="feature">
                                <h4>Transparent Transactions</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.</p>
                            </div>

                            <div className="feature">
                                <h4>Cryptographically Protected</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.</p>
                            </div>

                            <div className="feature">
                                <h4>No Deletion or Alteration</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.</p>
                            </div>

                            <div className="feature">
                                <h4>Distributed Control</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis pellentesque metus id lacinia. Nunc dapibus pulvinar auctor.</p>
                            </div>

                            {/* insert img */}

                        </div>
                    )}

                    {(activeItem === 'stats') && (
                        <div className="statistics">
                            <div className="statistic">
                                <h1>9.4K</h1>
                                <h6>Bottles recycled</h6>
                            </div>

                            <div className="statistic">
                                <h1>234</h1>
                                <h6>Rewarded users</h6>
                            </div>

                            <div className="statistic">
                                <h1>87+</h1>
                                <h6>Countries</h6>
                            </div>

                            <div className="statistic">
                                <h1>$58</h1>
                                <h6>Revenue per hour</h6>
                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        )
    }
}

