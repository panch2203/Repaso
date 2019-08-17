import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const API = 'https://api.noopschallenge.com/hexbot?count=5';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colorsFake: ["#00FFFF", "#008080", "#FF00FF", "#800000"],
      colors: [],
      error: null
    }
  }

    componentDidMount() {
      axios.get(API)
        .then(
          result => {
            console.log(result.data.colors);
            this.setState({
              colors: result.data.colors
            })
          })
          .catch(error => {
            this.setState({
              error: error
            })
          }
        );
  }

    render() {
        const { error, isLoaded, colorsFake, colors } = this.state;
        let content;
        console.log(colors);
        if (error) {
          content = <div>Error: {error.message}</div>;
        }
        else {
          return (
            content = (
              <div>
              {

                colors.map((color) => (
                  <p>                    
                    color.value;
                  </p>
                ))
              }
              </div>
            )
          );
        }

        return (
          <div className="App">
            { content }
          </div>
        )
      }

  }

export default App;
