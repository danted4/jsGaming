import React, { Component } from 'react';
import './loader.css' ;

export default class LoadSpinnerComponent extends Component{
  state = {
    loading : true
  }
  render(){
    if(this.state.loading){
    return <div className="loader"></div>
    }
    else{
    return <div className="loader"></div>
  }
  }
}
