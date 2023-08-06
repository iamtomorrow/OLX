import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* Redux imports */
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

/* routes imports */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Pages imports */
import { Home } from './pages/Home/Home.tsx';
import { About } from './pages/About/About.tsx';
import { NotFound } from './pages/NotFound/NotFound.tsx';
import { Signin } from './pages/Signin/Signin.tsx';
import { Signup } from './pages/Signup/Signup.tsx';
import { Ad } from './pages/Ad/Ad.tsx';
import { MyAccount } from './pages/MyAccount/MyAccount.tsx';
import { ProtectedRoute } from './assistant/routeHandler.tsx';
import { Detach } from './pages/Detach/Detach.tsx';
import { SideMenu } from './components/SideMenu/SideMenu.tsx';
import { Ads } from './pages/Ads/Ads.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={ store }>
        <SideMenu />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/About' element={ <About /> } />
          <Route path='/Signin' element={ <Signin /> } />
          <Route path='/Signup' element={ <Signup /> } />
          <Route path='/Ad/:id' element={ <Ad /> } />
          <Route path='/MyAccount' element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          } />
          <Route path='/Detach' element={
            <ProtectedRoute>
               <Detach /> 
            </ProtectedRoute>
          } />
          <Route path='/Ads' element={ <Ads /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </Provider>
    </React.StrictMode>,
  </BrowserRouter>
)
