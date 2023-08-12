import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Navbar from './pages/landingPage';
import HeroSection from './pages/HeroSection';
import Footer from './pages/FooterPage';
import MainSection from './pages/MainSection';
const App: React.FC = () => {
  return (
    <Router>
    
      <Switch>
      
        <Route exact path="/">
        <Navbar /> 
        <HeroSection/>
        <MainSection/>
<Footer/>
        </Route>
        <Route exact path="/login">
          <Login/>
          </Route>  
        <Route exact path="/signup">
          <Signup/>
          </Route>  
          <Route exact path="/reset-password" component={ResetPassword} />
            </Switch>
    </Router>
  );
};


export default App;
