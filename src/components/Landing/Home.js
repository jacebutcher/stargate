import logo from './../../world.gif';
import './../../styles/Home.css';
import { Link } from 'react-router-dom';
import Starfield from 'react-starfield';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <Starfield
        starCount={2000}
        starColor={[0, 185, 2]}
        speedFactor={0.1}
        backgroundColor="black"
      />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
          STARGATE 1.0
        </p>
        <p className="App-head">
          DEVELOPED BY ACTS
        </p>
        <Link
          className="App-link"
          to="/Options"
        >
          GET STARTED
        </Link>
      </header>
    </div>
  );
}