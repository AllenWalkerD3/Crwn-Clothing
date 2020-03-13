import React, { Component } from 'react';
import shopData from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
class ShopPage extends Component {
    constructor(){
        super();
        this.state = { collections:  shopData}
    }
    
    render() { 
        return ( 
            <div className='shop-page'>{

                this.state.collections.map(({id,...otherColllectionProps})=>(
                    <CollectionPreview key={id} {...otherColllectionProps}/>
                ))
            }</div>
         );
    }
}
 
export default ShopPage;