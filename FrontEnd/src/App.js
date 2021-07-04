import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      picture:"",
      token:false
    }
  }
  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({name:localStorage.getItem('name')})
      this.setState({email:localStorage.getItem('email')})
      this.setState({picture:localStorage.getItem('picture')})
      this.setState({token:localStorage.getItem('token')})
    }
  }
  componentDidUpdate=()=>{
    if(this.state.token){
      localStorage.setItem("name",this.state.name)
      localStorage.setItem("email",this.state.email)
      localStorage.setItem("picture",this.state.picture)
      localStorage.setItem("token",this.state.token)
    }
  }
  responseFacebook = (response) => {
    if(response.state !=="unknown"){
    this.setState({
      name:response.name,
      email:response.email,
      picture:response.picture.data.url,
      token:response.accessToken})
  }else{
    console.log("You are not sign up!")
  }
}
  render() {
    return (
      
      <center className="App">
      
        {this.state.token?<Home></Home>:
        <div className="form">
          <form className="m-5 ">
          <div className="mb-3 ">
            <h2> Login </h2>
            <hr></hr>
            <label className="form-label">Email: </label>
            <input type="text" className="form-control" id="name" />
            <label className="form-label">Password: </label>
            <input type="text" className="form-control" id="productdetails" />
          <button type="submit" className="btn btn-dark mt-3">login</button>
          </div>
          <FacebookLogin
          appId="509833830471819"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />
        </form>
        
          </div>
           }
      </center>
    )
  }
}