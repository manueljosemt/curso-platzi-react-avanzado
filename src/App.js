import React, {useContext, Suspense} from 'react'
import { Logo } from './components/Logo'
import {NavBar} from './components/NavBar'
import { GlobalStyle } from './styles/GlobalStyles'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
/* import { Favs } from './pages/Favs'   */
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import {NotFound} from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Favs = React.lazy(() => import('./pages/Favs'))

const UserLogged = ({ children }) => {
  return children({isAuth: false})
}

export const App = () => {
  const { isAuth } = useContext(Context)
  
  return (
  <Suspense fallback={<div/>}>
    <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs'/>
        <User path='/user'/>
      </Router>
      <NavBar/>
    </Suspense>
  )
}