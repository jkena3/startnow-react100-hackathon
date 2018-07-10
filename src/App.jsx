import React, { Component } from 'react';
import './App.css';
const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: '',
      image: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submit() {
    const reqURL = "http://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + "&APPID=74c7081a5b0e2e16de05649f7db7a09f";
    axios.get(reqURL)
    .then((res) => {
      if (res.status === 200) {
        this.setState({
          weather: res.data.weather[0].main
        })
      }
    })
    .catch((error) => {
      alert("Enter another city");
      console.log(error) //Logs a string: Error: Request failed with status code 404
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather-App</h1>
          <p className="App-intro">
            Enter your city, get the weather and a NASA photo of the day!
          </p>
        </header>

        <div className='body container-fluid' id='form1'>

          <div className='row'>
            <div className='col-md-6 col-sm-offset-3'>
              <div className='panel panel-default'>
                <div className='panel-heading' id='header'><h4>Enter City</h4></div>
                <div className='panel-body'>
                  <div className='form-group' onChange={this.handleChange}>
                    <input name='city' id='form1' type='text' placeholder="Enter City" className='form-control input-md text-center' defaultValue={this.state.city} />
                    <br />
                    <button id='submit' type='submit' className='btn btn-default' onClick={this.submit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='container-fluid'>
            <div className='output'>
              <div className='row'>

                {/*left side*/}
                <div className='col-md-6'>
                  <div className='panel panel-default'>
                    <div className='panel-heading' id='header'>Weather</div>
                    <div className='panel-body'>
                      <div id='weather' className='container-fluid' onChange={this.handleChange}>
                        {this.state.weather}
                      </div>
                    </div>
                  </div>
                </div>


                {/*right side*/}
                <div className='col-md-6'>
                  <div className='panel panel-default'>
                    <div className='panel-heading' id='header'>NASA Photo</div>
                    <div className='panel-body'>
                      <div id='image' className='container-fluid' onChange={this.handleChange}>
                        {this.state.image}
                      </div>
                    </div>
                  </div>
                </div>


                {/*closing row tag*/}
              </div>
              {/*closing output tag*/}
            </div>
            {/*closing containter tag*/}
          </div>
          {/*closing body tag*/}
        </div >
        {/*closing App tag*/}
      </div >
    );
  }
}

