import React, { Component } from 'react';
import './homepage.styles.scss';
import Directory from '../components/directory/directory.component';


export default class HomePage extends Component {
    state = {  }
    render() { 
        return ( <div className='homepage'>
            <Directory/>
        </div> );
    }
}
 