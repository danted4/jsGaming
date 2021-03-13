import React from 'react';
import { connect } from 'react-redux';

const userOutput = (props) =>{
  return (
    <div>
    <p>{props.name}</p>
    <p>REDUX {props.nm}</p>
    <button onClick={()=>props.onNameChange()} >Click</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    nm : state.name
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onNameChange : () =>dispatch({type:'CHANGE',payload:{name:'Kanav'}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(userOutput);
