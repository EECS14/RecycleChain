import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import {Link} from '../routes';

class auctions extends Component {



    render() {

        return (
            <div>
                <link rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />

                <h1>Auctions</h1>
                <h2>Select your role in auctions</h2>
                <Button.Group basic vertical>
                    <Link route="auctions/viewbales">
                        <a>
                        <Button>Seller</Button>
                        </a>
                    </Link>
                    <Link route="auctions/viewauctions">
                        <a>
                    <Button>Buyer</Button>
                    </a>
                    </Link>
                </Button.Group>
            </div>
        );
    }

}

//At the end of each page, a component is expected to be returned 
// If not, Next.js throws an error 
export default auctions; 