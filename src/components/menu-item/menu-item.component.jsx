import React, { Component } from 'react';
import './menu-item.styles.scss';
export default class MenuItem extends Component {
    state = { 
    }

      
    render() { 
        return ( 
            <div className={`${this.props.size} menu-item`}>
                <div style={{backgroundImage: `url(${this.props.imageUrl})`}} className='background-image'>

                </div>
                <div className='content'>
                    <h1 className='title'>{this.props.title.toUpperCase()}</h1>
                    <span>Shop Now</span>
                </div>
            </div>
         );
    }
}
 