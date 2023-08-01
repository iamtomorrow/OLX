import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* Redux imports */
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Pages imports */
import { Home } from './pages/Home/Home.tsx';
import { About } from './pages/About/About.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';
import { Signin } from './pages/Signin/Signin.tsx';
import { Signup } from './pages/Signup/Signup.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/Signin' element={ <Signin /> } />
          <Route path='/Signup' element={ <Signup /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
)
