import React, { Component } from 'react';
// import { Button } from 'antd-mobile';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

class App extends Component{
  constructor(props){
    super(props)
  }
    handleClick(){
    this.props.history.push('home/12')
    }
   render(){
    return (
      <div className="App">
       
         <Router> 
         <Link to="/home/30">
           跳转到home
          </Link>
           <Route path="/home/:id" component={Home}></Route>
         </Router>
      </div>
    )
   }
}

export default App;
