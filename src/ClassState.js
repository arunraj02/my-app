import React from "react"
class ClassState extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    handleChange1=()=>{
       this.setState({count:this.state.count + 1})
    }

    handleChange2 = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render(){
        return(
          <div> 
            <p><strong>Using ClassState</strong></p>
            <p>count value is: {this.state.count}</p>
            <button onClick={this.handleChange1}>Increment</button>
            <button onClick={this.handleChange2}>Decrement</button>
          </div>   
        )
    }
}
export default ClassState;