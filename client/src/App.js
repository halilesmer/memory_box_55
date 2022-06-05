import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create" element={<CreateScreen />} />
      </Routes>
    </div>
  );
}

export default App;
