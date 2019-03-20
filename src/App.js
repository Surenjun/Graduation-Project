import './css/App.css';
import './css/main.min.css'
import './css/nprogress.css'
import React, { Component } from 'react';
import Routers from "./Rounters/Rounters"
const NProgress = require("nprogress/nprogress");

class App extends Component {
    componentDidMount(){
        new Promise((resolve,reject)=>{
            NProgress.set(0.2);
            setTimeout(function () {
                resolve()
            },1000)
        }).then(()=>{
            setTimeout(function () {
                NProgress.set(0.6);
                return null;
            },1000)
        }).then(()=> {
            setTimeout(function () {
                NProgress.set(1);
            }, 2000)
        })
    }
      render() {
        return (
              <div className="App">
                <Routers/>
              </div>
        );
  }
}

export default App;
