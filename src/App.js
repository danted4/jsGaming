import React from 'react';
// import logo from './logo.svg';
import Links from './Header/Header';
import Home from './Home/Home';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import LoadSpinnerComponent from './utility/loader';
import BrickGameComponent from './BrickGame/BrickGame';
import SnakeGameComponent from './SnakeGame/SnakeGame';
import Tank90GameComponent from './Tank90/Tank90';

function App(props) {
  // const [usernameState, changeState] = useState({
  //   user1 : 'abc'
  // })
  // const [showhideState, toggler ] = useState({showhide : true})
  //
  // const changeHandler = (event) => {
  //   changeState({user1 : event.target.value})
  // }
  //
  // const toggleOutput = () =>{
  //   toggler({showhide : !showhideState.showhide})
  // }

  return (
    <div>
    <div className="App">
  {/*  <button onClick={toggleOutput}>{ showhideState.showhide ? 'Hide ' :  'Show '}Output</button>
    <UserInput changed = {changeHandler} name = {usernameState.user1}/>
    { showhideState.showhide ? <UserOutput name = {usernameState.user1} /> : null }
    */}
    <section >
    <Router>
      <Links/>
        <div style={{'paddingTop':'30px'}}>
        <Switch>
        <Route exact path="/home" component={Home} />
         <Route exact path="/brick" component={BrickGameComponent} />
        <Route exact path="/snake" component={SnakeGameComponent} />
        <Route exact path="/t90" component={Tank90GameComponent} />
        <Route exact path="/*" component={()=><Redirect to="/home" />} />
        </Switch>
        </div>
    </Router>
    </section>

    </div>
    </div>
  );
}

export default App;
