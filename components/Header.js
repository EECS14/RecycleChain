import React from 'react';
import { Menu } from 'semantic-ui-react';


import { Link } from '../routes';
export default () => {
    return (
        <div className="topMenu" style={{'width':'100%', 'overflow':'auto', 'white-space':'nowrap', 'background-color':'#289672', 'border-radius':'0px 0px 15px 15px', 'margin-bottom':'15px'}}>
            <Link route='/'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>About</a>
            </Link>

            <Link route='/registration'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Local Municipality</a>
            </Link>

            <Link route='/productionline'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Production Line Machine</a>
            </Link>

            <Link route='/recycler'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Recycler</a>
            </Link>

            <Link route='/auctions/viewbales'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Seller</a>
            </Link>
            
            <Link route='/sortingmachine'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Sorting Machine</a>
            </Link>

            <Link route='/auctions/viewauctions'>
                <a className='item' style={{'display': 'inline-block',
                'color': 'white',
                'font-family': 'Lato,\'Helvetica Neue\',Arial,Helvetica,sans-serif',
                'font-weight':'bold',
                'text-align': 'center',
                'padding': '14px',
                'text-decoration': 'none'}}>Buyer</a>
            </Link>
        </div>
    );
}