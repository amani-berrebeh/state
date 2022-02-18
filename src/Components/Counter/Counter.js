import React,{Component} from 'react'


class Counter extends Component {
    
    state = { timerCount:0, Count:0, text:"" }
    componentDidMount(){this.int=setInterval(() => {this.setState({timerCount:this.state.timerCount +1})
    
}, 1000);}
componentWillUnmount(){clearInterval(this.int)}

increment=()=>{this.setState({Count:this.state.Count +1})}
decrement=()=>{this.state.Count&&this.setState({Count:this.state.Count -1})}
reset=()=>{this.setState({Count:0})}
render() {

        return (  
            <div style={{backgroundColor:'lightblue',textAlign:'center'}}>
              <div style={{display:'flex', justifyContent:'center'}}>
                  <button onClick={this.increment} >+</button>
                <p>{this.state.Count}</p>
                <button onClick={this.decrement}>-</button>
                 </div>  
                <button onClick={this.reset}> reset </button>
                <input type="text" onChange={(e)=>this.setState({text:e.target.value})} />
                <p>{this.state.text}</p>
                <p>Timer Count: {this.state.timerCount}</p>

            </div>
        );
    }
}
 
export default Counter;