import React, {Component } from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'


import asyncComponent from '../Tools/AsyncComponent'

import Main from "../Main/Main"
import Head from "../Header/Header";

const DataDetail = asyncComponent(() => import("../DataDetail/DataDetail"));
const Vip = asyncComponent(() => import("../Vip/Vip"));
const DataCustomization = asyncComponent(() => import("../DataCustomization/DataCustomization"));
const About = asyncComponent(() => import("../About/About"));
const LoginDemo = asyncComponent(() => import("../Login/index"));
const Summary = asyncComponent(() => import("../Summary/Summary"));
const shopResult = asyncComponent(() => import("../shopResult/shopResult"));
const News = asyncComponent(() => import("../News/News"));
const Register = asyncComponent(() => import("../Register/Register"));
const DataMarket = asyncComponent(() => import("../DataMarket/DataMarket"));
const Pay = asyncComponent(() => import("../Pay/Pay"));

class Rounters extends Component {

    render() {
        return (
           <Router>
               <div>

                   <Switch>
                       <Route path="/Login" component={LoginDemo} />
                       <Route path="/Register" component={Register} />
                       <Route path={"/Vip"} component={Vip}/>
                       <Route path={"/Pay"} component={Pay}/>
                       <Route path="/" component={Head}/>
                   </Switch>

                   <Route path={"/Summary"} component={Summary}/>
                   <Route path={"/shopResult"} component={shopResult}/>
                   <Route path={"/News"} component={News}/>
                   <Route exact path={"/DataMarket"} component={DataMarket}/>
                   <Route path={"/DataMarket/Detail"} component={DataDetail}/>
                   <Route path={"/DataCustomization"} component={DataCustomization}/>
                   <Route path={"/About"} component={About}/>
                   <Route exact path={"/"} component={Main}/>

               </div>
           </Router>
        );
    }
}

export default Rounters;
