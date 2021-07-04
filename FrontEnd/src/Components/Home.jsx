import React, { Component } from 'react'
import axios from 'axios'
import Get from './Get';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            images: []
        }
    }
    componentDidMount = () => {
        this.setState({ name: localStorage.getItem('name') })
        this.setState({ email: localStorage.getItem('email') })
        this.setState({ picture: localStorage.getItem('picture') })
        axios.get("https://dog.ceo/api/breeds/image/random/7")
            .then(res => {
                console.log(res.data.message)
                this.setState({ images: res.data.message })
            })
    }
    logout = () => {
        localStorage.clear()
    }
    render() {
        return (
            <div className="position-relative">
               <center >
      <Get/>
                 </center>
             </div>
        )
    }
}