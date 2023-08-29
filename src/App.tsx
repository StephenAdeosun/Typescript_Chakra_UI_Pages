import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Navbar from './pages/landingPage';
// import HeroSection from './pages/HeroSection';
import Footer from './pages/FooterPage';
import MainSection from './pages/MainSection';
import  AdSubmissionPage from './pages/adSubmission';
const App: React.FC = () => {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Navbar />
          {/* <HeroSection/> */}
          {/* <AdSubmissionPage/> */}
          <MainSection />
          <Footer />
        </Route>
        <Route exact path="/Postads">
          <AdSubmissionPage />
          </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/reset-password" component={ResetPassword} />
      </Switch>
    </Router>
  );
};


export default App;
