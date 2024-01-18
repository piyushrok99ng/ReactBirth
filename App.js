import logo from './logo.svg';
import './App.css';
import Radio from './component/radio';
import Record from './component/table';
import React, {useState} from 'react';
function App() {
const [param, setParam] = useState('');

const sortByParameter = (e) => {
  console.log(" in app "+ e.target.value);
  setParam(e.target.value);
  console.log(param);
}
  return (
    <div className="App">
      <Radio sortBy={sortByParameter}></Radio>
      <Record param={param}></Record>
    </div>
  );
}

export default App;
