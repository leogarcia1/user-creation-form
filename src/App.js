import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <React.Fragment>

      <Header/>

      <div className='message-container'>
        <span className='message'>Hello user! Please complete and submit this form.</span>
      </div>

      <Form/>

    </React.Fragment>
  );
}

export default App;
