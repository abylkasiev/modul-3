import { useState } from 'react';
import Blocks from './components/Blocks/Blocks';
import './App.css';
import bg1 from '../src/components/assets/img/bg1.png';
import bg2 from '../src/components/assets/img/bg2.png';

function App() {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      icon: "img/icon1.png",
      title: "Search doctor",
      text: "Choose your doctor from thousands of specialist, general, and trusted hospitals"
    },
    {
      id: 2,
      icon: "img/icon2.png",
      title: "Online pharmacy",
      text: "Buy  your medicines with our mobile application with a simple delivery system"
    },
    {
      id: 3,
      icon: "img/icon3.png",
      title: "Consultation",
      text: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      id: 4,
      icon: "img/icon4.png",
      title: "Details info",
      text: "Free consultation with our trusted doctors and get the best recomendations"
    },
    {
      id: 5,
      icon: "img/icon5.png",
      title: "Emergency care",
      text: "You can get 24/7 urgent care for yourself or your children and your lovely family"
    },
    {
      id: 6,
      icon: "img/icon6.png",
      title: "Tracking",
      text: "Track and save your medical history and health data "
    }
  ])
  return (
    <div className="App">
      <div className="wrapper">
          <img src={bg1} className="bg-1"/>
          <img src={bg2} className="bg-2"/>
        <header className="header">
          <h1 className="header__title">Our services</h1>
          <div className="header__devider"></div>
          <div className="header__text">
            We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health
          </div>
        </header>
        <section className="body">
          <Blocks list={blocks}/>
          <div className="button">
            <button className="btn">Learn more</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
