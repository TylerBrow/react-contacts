import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'
import data from './randomusers.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelopeSquare, faMobileAlt, faGlobe, faArrowLeft} from '@fortawesome/free-solid-svg-icons'


library.add(faUser)
library.add(faEnvelopeSquare)
library.add(faMobileAlt)
library.add(faGlobe)
library.add(faArrowLeft)

class Profile extends Component {
    state = {
        name : "",
        email: "",
        phone: "",
        location:"",
        img: ''
    }

    componentDidMount() {
        const person = data.find(person => {
            return person.id == this.props.match.params.id
        })

        this.setState({
            name: `${person.name.first} ${person.name.last}`,
            email: person.email,
            phone: person.phone,
            location: `${person.location.city}, ${person.location.state}`,
            img: person.picture.large
        })
    }


    render() {
        return (
            <div id='person'>
                <div id='pic'>
                    <Link to='/'><FontAwesomeIcon id='arrow' icon={faArrowLeft} /></Link><img src={this.state.img}/>
                </div>
                <div id='info'>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} /><span>{this.state.name}</span></li>
                        <li><FontAwesomeIcon icon={faEnvelopeSquare} /><span>{this.state.email}</span></li>
                        <li><FontAwesomeIcon icon={faMobileAlt} /><span>{this.state.phone}</span></li>
                        <li><FontAwesomeIcon icon={faGlobe} /><span>{this.state.location}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}




export default Profile;