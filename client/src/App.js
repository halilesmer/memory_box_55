import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from './Screens/HomeScreen';
import CreateScreen from './Screens/CreateScreen';
import { Container } from 'react-bootstrap';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/create" element={<CreateScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>

  );
}

export default App;
