import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignIn from './components/sign-in/sign-in.component.jsx';

function App() {
  return (
    <div>
      <Header />
      {/* <Routes>
        <Route exact path='/' element={HomePage} />
      </Routes> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/SignIn" component={SignIn} />
      </Switch>
    </div>
  );
}


export default App;
