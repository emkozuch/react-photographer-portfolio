import React from 'react';
import './Styles/Components/App.scss';
import Wrapper from './Components/Wrapper'


import { BrowserRouter, Route } from 'react-router-dom'

import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import AlbumPage from './Pages/AlbumPage'
import { CSSTransition } from 'react-transition-group';

const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/portfolio', name: 'Portfolio', Component: PortfolioPage },
  { path: '/portfolio/:id', name: 'AlbumPage', Component: AlbumPage },
  { path: '/contact', name: 'Contact', Component: ContactPage },
]
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={600}
                    classNames="page"
                    unmountOnExit
                  >
                    <Component match={match} />
                  </CSSTransition>
                )}
              </Route>
            ))}
        </Wrapper>
      </div>
    </BrowserRouter >

  );
}
export default App
