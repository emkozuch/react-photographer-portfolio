import React from 'react';
import './Styles/Components/App.scss';
import Wrapper from './Components/Wrapper'
import Menu from './Components/Menu'


import { BrowserRouter, Route } from 'react-router-dom'

import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import AlbumPage from './Pages/AlbumPage'

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <Wrapper>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage}/>
          <Route path="/portfolio/:id" component={AlbumPage}/>
          <Route path="/contact" component={ContactPage} />
        </Wrapper>
      </div>

    </BrowserRouter>

  );
}


export default App;
