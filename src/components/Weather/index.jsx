import React, { Component } from 'react'
import axios from 'axios';
import WeatherDetails  from "../WeatherDetails";
import { Button } from "@mui/material";


class Weather extends Component {
  constructor(){
    super();
    this.state = {
      temp: "",
      city: "",
      weather: "",
      icon: "",
      high: "",
      low: "",
      open: false,
    }
  }

  componentDidMount(){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=77ef59c89e2314e4b004c6a6063a4a21"
    axios.get(url).then((resp)=>{
      // console.log(resp.data);
      this.setState({
        temp: resp.data.main.temp,
        city: resp.data.name,
        weather: resp.data.weather[0].description,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        icon: resp.data.weather[0].icon,
      })
    })
    //  const elems = document.querySelectorAll('.modal');
    //  window.M.Modal.init(elems);
  }

render(){
  // const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;
  return(
    <div className="App">
      <h1>Weather today</h1>
      <p>{this.state.temp} °C</p>
        {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a> */}
  {/* <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>{this.state.city}</h4>
      <p>High: {this.state.high}</p>
      <p>Low: {this.state.low}</p>
      <p>{this.state.weather} <img src={iconUrl} alt="weather" /></p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">OK</a>
    </div>
  </div> */}
  <WeatherDetails
    open={this.state.open}
    onClose={() => this.setState({ open:false })}
    weather={{
      temp: this.state.temp,
      city: this.state.city,
      weather: this.state.weather,
      icon: this.state.icon,
      high: this.state.high,
      low: this.state.low,
    }}/>
      <Button onClick={() => this.setState({ open:true })} variant="contained">Details</Button>
    </div>
  );
}
}




export default Weather;
