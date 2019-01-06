import React, { Component } from 'react'
import Categories from './Categories'
import axios from 'axios'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'

import Header from './Header'

class App extends Component {
  state = {
    items: null,
    posts: null,
    website: null,
    loading: false
  }

  handleChange = (e) => {
    this.setState({
      website: e.target.value
    })
  }

  handleClick = (id) => {
    console.log('Clicked ' + id);
    this.setState({
      loading: true
    })
    axios.get("https://" + this.state.website + "/wp-json/wp/v2/posts?per_page=20&categories=" + id)
      .then((response) => {
        this.setState({
          posts: response.data,
          loading: false
        })
      })
      .catch(function (error) {
        console.log(error)
        this.setState({
          loading: false
        })
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true
    })
    console.log("https://" + this.state.website + "/wp-json/wp/v2/categories/?per_page=100");
    axios.get("https://" + this.state.website + "/wp-json/wp/v2/categories/?per_page=100")
      .then((response) => {
        this.setState({
          items: response.data,
          loading: false,
          posts: null
        })
      })
      .catch(function (error) {
        this.setState({
          loading: false
        })
        console.log(error);
      })
  }
  render() {
    let posts = this.state.posts;
    let data = posts ? (
      posts.map(post => {
        return (
          <div className="col s12 m6" key={post.id}>
            <div className="card">
              <div className="card-content">
                <span className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></span>
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
              </div>
              <div className="card-action">
                <a href={post.link} target="_blank" rel="noopener noreferrer">View Post</a>
              </div>
            </div>
          </div>
        )
      })
    ) : (
        <div className="chip">
          No Posts Yet
      </div>
      );
    return (
      <div className="App">
        <Header />
        <div className="section">
          <div className="container">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s12">
                  <input type="text" className="validate" id="website" placeholder="www.techcrunch.com" onChange={this.handleChange} />
                  <label htmlFor="website">http://</label>
                </div>
                {
                  this.state.loading ?
                    <div className="progress">
                      <div className="indeterminate"></div>
                    </div> : null
                }
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="align-middle">
            <div className="row">
              <div className="col m4 s12">
                <Categories items={this.state.items} handleClick={this.handleClick} />
              </div>
              <div className="col m8 s12 bar">
                {data}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
