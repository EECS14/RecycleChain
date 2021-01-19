/*
This is the index page which will be the first page of the dapp to run
To run the app, use the command npm run dev
*/

import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
//import buildingsImg from '../resources/images/buildings.jpg'; // does not work for some reason

export default class index extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
            <Menu>
                <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
                >
                About
                </Menu.Item>

                <Menu.Item
                name='register'
                active={activeItem === 'register'}
                onClick={this.handleItemClick}
                >
                Register
                </Menu.Item>

                <Menu.Item
                name='participate'
                active={activeItem === 'participate'}
                onClick={this.handleItemClick}
                >
                Participate
                </Menu.Item>

                <Menu.Item
                name='auctions'
                active={activeItem === 'auctions'}
                onClick={this.handleItemClick}
                >
                Auctions
                </Menu.Item>

                <Menu.Item
                name='emulators'
                active={activeItem === 'emulators'}
                onClick={this.handleItemClick}
                >
                Emulators
                </Menu.Item>
            </Menu>

            {(activeItem === 'about') && (
            <div>
                <div className="about">
                    <h1>Recycle Chain</h1>
                    <p>Recycle Chain is a system that digitizes recycleable plastic waste to provide transparency of post-consumer plastic waste management and real-time tracking of disposed plastic waste to different stakeholders. It rewards users with Ether for participating in environment friendly practices such as recycling.</p>
                </div>

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

            </div>
            )}

            {(activeItem === 'register') && (
                <div>
                    <h2>Register</h2>
                    <h3>Be part of the journey to a more sustainable future!</h3>
                    <p>[description]</p>
                    <Button>Register</Button>
                </div>
            )}

            {(activeItem === 'participate') && (
                <div>
                    <h2>Participate</h2>
                    <h3>Get rewarded for managing your plastic waste!</h3>
                    <p>[description]</p>
                    <Button>Register</Button>
                </div>
            )}

            {(activeItem === 'auctions') && (
                <div>
                    <h2>Auctions</h2>
                    <h3>Be part of the transition to a circular economy!</h3>
                    <p>Keep resources in use as long as possible and extract the maximum value out of them by participating in the trading of recycled plastic.</p>
                    <Button>Buy</Button>
                    <Button>Sell</Button>
                </div>
            )}

            {(activeItem === 'emulators') && (
                <div>
                    <h2>Emulators</h2>
                </div>
            )}

        </div>
    )
  }
}