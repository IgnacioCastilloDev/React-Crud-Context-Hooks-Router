import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
  } from "react-router-dom";
import { HolaMundo } from './HolaMundo';
import { Main } from './Main';
import { NavBar } from './NavBar';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';

export const AppRouter = () => {
    return (
        

      <Router>
       <>
       <NavBar/>
       <Switch>
      
         <Route exact path ="/" component={HolaMundo}/>
         <Route exact path ="/crud" component={Main}/>
         <Route exact path ="/one" component={PageOne}/>
         <Route exact path ="/two" component={PageTwo}/>
       </Switch>
       </>
       </Router>
    )
}
