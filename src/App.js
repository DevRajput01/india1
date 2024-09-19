import React from 'react';
import './App.css'; 
import Home from './components/Pages/Home';
// import Home2 from './components/Pages/Home2';
import Footer from './components/Pages/Footer';
import Header from './components/Pages/Header';
function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Home2 /> */}
      <Footer />
        
    </div>
  );
}

export default App;
