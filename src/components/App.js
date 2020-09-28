import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;