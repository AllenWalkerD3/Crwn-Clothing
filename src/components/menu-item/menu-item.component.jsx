import React, { Component } from 'react';
import './menu-item.styles.scss';
import {withRouter} from'react-router-dom';

class MenuItem extends Component {
    constructor(props){
        super(props);
    }
    state = { 
    }

      
    render() { 
        return ( 
            <div className={`${this.props.size} menu-item`} onClick={()=>this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`)}>
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
export default withRouter(MenuItem);
 