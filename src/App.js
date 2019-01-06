import React, { Component } from 'react'
import Categories from './Categories'
import axios from 'axios'

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
      loading:true
    })
    axios.get("https://" + this.state.website + "/wp-json/wp/v2/posts?per_page=20&categories=" + id)
      .then((response) => {
        this.setState({
          posts: response.data,
          loading:false
        })
      })
      .catch(function (error) {
        console.log(error)
        this.setState({
          loading:false
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
          posts:null
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
        <nav>
          <div className="nav-wrapper red darken 3">
            <a href="\home" className="brand-logo center">Categorizr</a>
          </div>
        </nav>
        <div className="section">
          <div className="container">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s10">
                  <input type="text" className="active flow-text" id="website" placeholder="Website Name . ." onChange={this.handleChange} />
                </div>
                <button className="btn waves-effect waves-light btn-large" type="submit" name="action">Go <i class="material-icons right">send</i></button>
              </div>
            </form>
          </div>
        </div>

        {
          this.state.loading ?
            <div className="progress">
              <div className="indeterminate"></div>
            </div> : null
        }

        <Categories items={this.state.items} handleClick={this.handleClick} />
        <div className="container">
          {data}
        </div>
      </div>
    );
  }
}

export default App;
