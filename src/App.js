import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
      <Header />
      <div className="main-body">
        <Navbar />
        <Main />
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;