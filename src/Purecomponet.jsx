import React, { PureComponent } from 'react'

export default class Purecomponet extends PureComponent {
  constructor(){
    super();
    this.state ={
      Count : 0
    }
  }
  componentDidMount(){
    console.log("renderd")
  }
  componentDidUpdate(){
    console.log("Re-rendered")
  }
  render() {
    return (
      <>
     
<h1 className='text'> Counter : {this.state.Count}</h1>
<button onClick={()=>{this.setState({Count:this.state.Count+1})}}>Increase(PureComponent)</button>
<br />
<button onClick={()=>{this.setState({Count:this.state.Count})}}>Decrease(PureComponent)</button>

<button className='texxt' onClick={()=>{this.setState({Count:this.state.Count-1})}}>Decrease(Component)</button>
<br />
<li>
PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. 
</li>
<li>
The difference between them is that React.Component doesn't implement shouldComponentUpdate()
</li>
<li>
but React.PureComponent implements it with a shallow prop and state comparison.
</li>



      </>
    )
  }
}
