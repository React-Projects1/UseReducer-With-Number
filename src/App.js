import { createContext, useReducer } from "react";
import "./App.css";
import Code1 from "./components/code1";
export const x1 = createContext()
export const x2 = createContext()

function App() {
  
  return <div className="App">
  <x1.Provider value={'marwa'}>
    <x2.Provider value={'refaieh'}>
      <Code1/>
    </x2.Provider>
  </x1.Provider>
  </div>;
}

export default App;
