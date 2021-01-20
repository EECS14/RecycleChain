import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu>
            <Link route='/'>
                <a className='item'>About</a>
            </Link>

            <Link route='/registration'>
                <a className='item'>Government Entity</a>
            </Link>

            <Link route='/productionline'>
                <a className='item'>Production Line Machine</a>
            </Link>

            <Link route='/sortingmachine'>
                <a className='item'>Sorting Machine</a>
            </Link>

            <Link route='/recycler'>
                <a className='item'>Recycler</a>
            </Link>

            <Link route='/auctions/viewbales'>
                <a className='item'>Seller</a>
            </Link>

            <Link route='/auctions/viewauctions'>
                <a className='item'>Buyer</a>
            </Link>
        </Menu>
    );
}