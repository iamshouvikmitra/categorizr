import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {
    state = {
        website: null
    }
    handleChange = (e) => {
        this.setState({
            website: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("https://"+this.state.website+"/wp-json/wp/v2/categories/?per_page=100");
        axios.get("https://"+this.state.website+"/wp-json/wp/v2/categories/?per_page=100")
        .then((response)=>{
            // console.log(response.data)
            this.props.handleData(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    render() {
        return (
            <div className="section">
                <div className="container">
                    <form action="" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s10">
                                <input type="text" className="active" id="website" placeholder="Website Name . ." onChange={this.handleChange} />
                            </div>
                            <button className="btn waves-effect waves-light " type="submit" name="action">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;