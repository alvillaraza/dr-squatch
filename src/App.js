import { useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  useEffect(() => {
  axios.get('https://ae3t7l1i79.execute-api.us-east-1.amazonaws.com/bundles').then((res) => {
console.log(res)})})
  return (
    <div className="App">
      Dr Squatch
    </div>
  );
}

export default App;
