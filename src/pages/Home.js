import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/Home.css';
import Navbar from '../components/Navbar';
import ButtonGroup from '../components/ButtonGroup';

class Home extends React.Component{
    render()
    {
      return (
          <div>
              <Navbar />
              <div className="container-fluid">
                  <div className="row">
                      <ButtonGroup/>
                  </div>
              </div>
          </div>
        );
    }
}

export default Home;
