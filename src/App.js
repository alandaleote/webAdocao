import React from 'react'
import './App.css'
import Header from'./componentes/Header/index'
import Banner from './componentes/Banner/index'
import About from './componentes/About/index'
import Footer from './componentes/Footer/index'


function App() {
  return (
    <div className="App">
      <main className="App-content">
        <Header/>
        <Banner/>
        <About/>
        {/* <Gallery/> */}
        <Footer/>
    </main>
  </div>
);
}
export default App;
