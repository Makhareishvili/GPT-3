import {
  Footer,
  Features,
  Blog,
  Posibility,
  Header,
  WhatGPT3,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
