import React from "react";
import axios  from 'axios';
import './style.scss';

class App extends React.Component {

state = {
joke: '',
// price: '0.3'
}

  GetJoke = async () => {
    const {data} = await axios.get(`http://www.boredapi.com/api/activity/`);
    // ?price=${this.state.price}
    this.setState({joke: data.activity})
    return
  }

  
  componentDidMount() {
    this.GetJoke()
}

  showMe() {
    console.log(this.state.joke)
  }

  render() {
    // this.GetJoke()
    const {joke} = this.state;
    console.log(joke)
    return (
      <div className="main-container">
      <p>{joke}</p>
      <button className="change-btn" onClick={this.GetJoke}>Show Activity</button>
      </div>
    )
  }
}
export default App;
