import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

export default class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }

      submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Your movie has been saved with this ID : ${res.id} !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Error while adding your movie : ${e.message}`);
            });
      }


      render(){
          return (
            <div className="FormEmployee">
            <h1>New movie</h1>
          
            <form onSubmit={this.submitForm}>
              <fieldset>
                <legend>Name of the movie</legend>
                <div className="form-data">
                  <label htmlFor="title">Name</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="poster">Poster</label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>
          
                <div className="form-data">
                  <label htmlFor="comment">Comment</label>
                  <textarea 
                    name="comment" 
                    id="comment" 
                    cols="30" 
                    rows="10">
                  </textarea> 
                </div>
                <hr />
                <div className="form-data">
                  <input type="submit" value="Send your movie" />
                </div>
              </fieldset>
            </form>
          </div>
          )
      }
}

