import React from 'react';
import FormContainerAddPet from './forms/FormContainerAddPet.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>This is the page</p>
      <FormContainerAddPet myprop={'a.j.'}>Form</FormContainerAddPet>
    </div>
  );
}

export default App;
