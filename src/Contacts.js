import React, { Component } from 'react';

import { Link} from 'react-router-dom'
import data from './randomusers.json'



class Contacts extends Component {
   

    render() {
        return (
            <div id='contacts'>
                <h2>Contacts</h2>
                <div id='people'>
                <ul>
                    {
                    data.map(person => (
                        <li key={`person-${person.id}`}><img src={`${person.picture.thumbnail}`} alt='' /><Link to={`/profile/${person.id}`}>{person.name.first} {person.name.last}</Link></li>
                    ))
                    }
                </ul>
            </div>
        </div>
        )
    }
}




export default Contacts;