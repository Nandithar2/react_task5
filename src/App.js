import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageDiff = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      setAge(ageDiff - 1);
    } else {
      setAge(ageDiff);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your date of birth
        <br/>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default App;

