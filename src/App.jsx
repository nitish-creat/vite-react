// src/App.jsx
import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const username="Nitish rana"
  return (
    <div>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to My Basic React Site!{username}</h1>
        <p>This is a simple homepage built with React and Vite.</p>
      </main>
    </div>
  );
}

export default App;
