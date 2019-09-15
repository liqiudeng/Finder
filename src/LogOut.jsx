import React, {Component} from 'react'
import Header from './Header.jsx'

class LogOut extends Component {
  constructor(props){
    super(props)
  }

  logOut = () =>{
    console.log("outoutoutout")
    this.props.dispatch({ 
      type: "logout"
     }) 
      }
      
     componentDidMount = () => { 
      this.logOut
      console.log("ininininin")
      } 
      
    render = () =>{
      
      return(
        <div><Header />
        "Okok"
        </div>
      )
    }
   }
   
  export default  LogOut
  