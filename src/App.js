import './App.css';
import React from "react";
import MainLayout from './MainLayout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gender: "male",
      weightMeas: "kg",
      heightMeas: "cm",
      weight: 0,
      height: 0,
      activity: 5,    };
  }

  calculate = () => {
    var maintenance = 0;
    var weight = 0;
    var height = 0;
    var activity = parseInt(document.getElementById('activity').value) / 10 + 0.9;
    var age = parseInt(document.getElementById("age").value);
    if(this.state.weightMeas === "lbs") {
      weight = parseInt(document.getElementById('weightLbs').value);
    } else {weight = (parseInt(document.getElementById('weightKg').value) * 2.20462)}
    if(this.state.heightMeas === "cm") {
      height += parseInt(document.getElementById('heightCm').value) * 0.393701;
    }
    else {
      var feet = parseInt(document.getElementById('heightFt').value);
      var inches = parseInt(document.getElementById('heightInch').value);
      height = (feet * 12) + inches;
    }
    if(this.state.gender === "male") {
      maintenance = Math.floor((66 + (6.23 * weight) + (12.7 * height) - (6.8 * age)) * activity);
    } else {maintenance = Math.floor((655 + (4.35 * weight) + (4.7 * height) - (4.7 * age)) * activity)};
   this.updateResults(maintenance);
  }

  updateResults = (calories) => {
    const labelNames = ['modLoss', 'slowLoss', 'slowGain', 'modGain'];
    const loseGain = ['lose 0.5lbs', 'lose 1 lb', 'gain 0.5 lbs', 'gain 1 lb'];
    const totals = [calories - 250, calories -500, calories + 250, calories + 500];
    for(let i = 0; i < 4; i++) {
      document.getElementById(labelNames[i]).innerHTML = "To " + loseGain[i] + 
      ' per week, consume ' + totals[i] + " calories daily";
    }
    document.getElementById('error').innerHTML = "";
    document.getElementById('maintain').innerHTML = "To maintain your weight, consume "
    + calories + ' calories daily'
  }

  updateState = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
  return (
    <div className='App'>
      <MainLayout propState={this.state} calculate={this.calculate} updateState={this.updateState}></MainLayout>
    </div>
  );
}
}

export default App;
