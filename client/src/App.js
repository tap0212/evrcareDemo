import React, { Component } from 'react';
import { css } from "@emotion/core";
import {PropagateLoader} from "react-spinners";
import {getMessage} from './apiCall'

import './App.css'

const override = css`
display: block;
margin-left:50%;
margin-top:50vh
`;

class App extends Component {
  constructor(props){
    super(props)
    this.state = ({
      response:"",
      loader:false
    })
  }

  componentDidMount(){
    getMessage().then((res) => {
      this.setState({
        loader:true,
        response:res
      })
    }).catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
      <div className="note">
      {!this.state.loader ? <PropagateLoader
            css={override}
            size={22}
            color={"#66FCF1"}
            loading={this.state.loading}
          /> : <h1>{this.state.response.message}</h1> }
      </div>
        
      </div>
    );
  }
}

export default App;