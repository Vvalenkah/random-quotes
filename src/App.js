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

  render() {
    // this.GetJoke()
    const {joke} = this.state;
    console.log(joke)
    return (
      <div className="body-wrapper">
        <header>
          <h1>Activity Advisor</h1>
          <p>By Vvalenkah</p>
        </header>
        <div className="main-container">
        <p>{joke}</p>
        <button className="change-btn" onClick={this.GetJoke}>What to do?</button>
        </div>
        <footer>
          <a href="https://github.com/Vvalenkah" target="blank">My Github</a>
          <p>2022</p>
        </footer>
      </div>
    )
  }
}
export default App;
