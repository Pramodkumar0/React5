import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Purecomponet from './Purecomponet';






function App() {
  return (
    <>  
  <h1>Purecomponet:</h1>
  <Purecomponet/>
  <hr/>
  <h1>High Order Component:</h1>
<li>Component inside the component is called a High Order Component </li>
  <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic.</li>
  <li>HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.</li>
  <li>Concretely, a higher-order component is a function that takes a component and returns a new component.</li>
  <br/>
 <pre>
 </pre>
 

<h2 className='clr'>Function inside We are writing a lot of different compoents then Home compent is to be a HOC
 </h2>

  </>

  )
}

export default App;

