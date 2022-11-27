import './App.css';
import Navbar from "./Components/Navbar";
import FilterSection from "./Components/FilterSection";
import ShirtsContainer from "./Components/ShirtsContainer";
import React from 'react';

class App extends React.Component {
  

  render (){
    
    return (<div>
    <Navbar/>
    <div className="ShoppingPage">
    <FilterSection/>
    <ShirtsContainer/>
    </div>
    </div>
  );
}
}

export default App;
