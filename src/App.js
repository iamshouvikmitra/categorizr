import React, { Component } from 'react';
import Form from './Form';
import Categories from './Categories'

class App extends Component {
  state={
    items:null
  }

  handleData=(data)=>{
    this.setState({
      items:data
    })
  }
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo">Categorizr</a>
            <ul className="right">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
          <Form handleData={this.handleData}/>
          <Categories items={this.state.items}/>
        </nav>
      </div>
    );
  }
}

export default App;
