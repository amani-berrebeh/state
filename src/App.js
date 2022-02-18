
import React,{Component} from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';

class App extends Component {
  state = {toggle:true, timerApp:0  } 
  componentDidMount(){setInterval(() => {this.setState({timerApp:this.state.timerApp +1})
    
  }, 1000);}
  
  render() { 
    return (
      <div>
        <button onClick={()=>this.setState({toggle:!this.state.toggle})}>
          {this.state.toggle?'hide':'show'}
        </button>
        {this.state.toggle&&<Counter/> }
        <p>Timer App:{this.state.timerApp}</p>
      </div>
    );
  }
}
 
export default App;

