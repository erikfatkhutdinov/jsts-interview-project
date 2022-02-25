import React from 'react';
import './App.css';
import HeaderContainer from "./components/header/HeaderContainer";
import ContentContainer from "./components/content/ContentContainer"

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <ContentContainer />
    </div>
  );
}

export default App;
