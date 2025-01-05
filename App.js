import './App.css';
import WelcomePage from './welcome';
import Ternaryexample from './Ternaryexample';
import User from './User';
import StateExample from './StateExample';
import Test from './Test';
import EffectExample from './EffectExample';
 
 


function App() {
  return (
    <div className="App">
    <h1>Welcome to React Class</h1>
    <WelcomePage/>
    <h2>this is ternary operator example</h2>
    <Ternaryexample/>
    <h2>this is props example</h2>
    <User/>
    <h2>this is useState example</h2>
    <StateExample/>

   <h2>this is props example</h2>
   <Test/>
   <EffectExample/>
  </div>
    
  )
  
  
}

 
 
 

export default App
