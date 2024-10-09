import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case "inc":
        return state + 1;
      case "dec":
        return state - 1;
      case "reset":
        return initialState ;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState)

  return <div className="App">
    <h2>{state}</h2>
    <button onClick={()=>{dispatch('inc')}}>+</button>
    <button onClick={()=>{dispatch('dec')}}>-</button>
    <button onClick={()=>{dispatch('reset')}}>Reset</button>
  </div>;
}

export default App;
