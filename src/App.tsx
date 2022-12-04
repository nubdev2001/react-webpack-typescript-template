import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './Components/Pages/About';
import Image from "./images/sea.jpg"
import SVG from "./images/webpack.svg"

const App = () => {
  const [count, setCount] = React.useState(0);

  // const HomeComponent = React.lazy(() => )

  return (
    <Router basename='/'>
      <h4>routers</h4>
      <div style={{ display: "flex" }}>
        <Link to={'/'} style={{ marginRight: "15px" }}>Home</Link><br/>
        <Link to={'/about'}>About</Link>
      </div>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr/>
      <h4>css loader && sass-loader</h4>
      <h5 className='css'>CSS</h5>
      <h5 className='scss'>SCSS</h5>
      <hr />
      <h4>url loader && file-loader</h4>
      <img style={{ width: "150px" }} src={Image} />
      <hr />
      <h4>process env</h4>
      <h5>NODE_ENV : {process.env.NODE_ENV}</h5>
      <h4>svg url loader</h4>
      <img style={{ width: "150px" }} src={SVG} />
      <hr />
      Dev by NUBDev
    </Router>
  );
};

export default App;
