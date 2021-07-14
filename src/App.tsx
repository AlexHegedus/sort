import * as React from 'react';
import './App.css';
import Menu from './components/controller'

export const list: number[] = []
function App() {
  return (
    <div className="App">
      <Menu/>
      {list}
    </div>
  );
}

export default App;
