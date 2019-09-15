import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx"
import SignUp from "./SignUp.jsx"
import LogOut from "./LogOut.jsx"
import Middle from "./Middle.jsx"

class App extends Component {
  
  renderLogOut = () => {
    return(
      <div><LogOut /></div>
    )
  }

  renderHomePage = () => {
    return (
      <div>
        <Header />
        <Middle />
      </div>
    )
  }

  renderSignUp =() => {
    return (
      <div>
        <SignUp />
      </div>
    )
  }
    render = () => {
       return (
             <BrowserRouter>
             <div>
               <Route exact={true} path="/" render={this.renderHomePage}/>
               <Route exact={true} path="/signUp" render={this.renderSignUp}/>
               <Route exact={true} path="/logOut" render={this.renderLogOut}/>
             </div>
             </BrowserRouter>
              )
  }
  }
  export default App;